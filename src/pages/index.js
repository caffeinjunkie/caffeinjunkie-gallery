import React, { useState, useRef } from 'react';
import Lottie from 'react-lottie';
import { Lightbox } from 'react-modal-image';
import { graphql } from 'gatsby';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import useImagePreloader from '../hooks/useImagePreloader';
import useMutation from '../hooks/useMutation';
import sanity from '../sanity/client';
import * as loadingAnimation from '../assets/animation/loadingAnimation.json'

export default function Home({ data }) {
  const { allSanityPhoto: { nodes: photos } } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [allPhotos, setAllPhotos] = useState(photos);
  const { imagesPreloaded = false } = useImagePreloader(photos)
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  const mutate = useMutation;
  const subscription = useRef(null);
  const subscriptionQuery = `*[_type == "photo"]`
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  React.useEffect(() => {
    subscription.value = sanity.listen(subscriptionQuery).subscribe((update) => {
      const { result } = update;
      const { _id, views } = result;
      const newPhotos = allPhotos.map((photo) => photo._id === _id ? { ...photo, views } : photo)
      setAllPhotos(newPhotos);
    })
  })
  
  React.useEffect(() => {
    return () => {
      subscription.value.unsubscribe();
    }
  }, [])
  
  const selectImage = async (photo) => {
    setIsOpen(true);
    setSelectedPhoto(photo);
    const payload = {
      patch: {
        id: photo._id,
        set: {
          views: photo.views + 1
        }
      }
    }
    
    await mutate(payload)
  }
  
  const unselectImage = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  }
  
  const renderImage = (photo) => (
    <Image
      key={photo._id}
      data={photo}
      onClick={() => selectImage(photo)}
    />
  )
  
  const renderLoadingOverlay = () => (
    <div className="
      flex-1
      self-center
      items-center
      justify-center"
      style={style}
    >
      <Lottie
        options={lottieOptions}
        height={46}
        width={210}
      />
    </div>
  )
  
  return (
    <Layout>
      <Seo title="Home" />
      {!imagesPreloaded && renderLoadingOverlay()}
      {imagesPreloaded && <div
        className="
        px-0 gap-0
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {allPhotos.map(renderImage)}
      </div>}
      {isOpen && <Lightbox
        large={selectedPhoto.url}
        alt={selectedPhoto.title}
        hideDownload
        onClose={unselectImage}
      />}
    </Layout>
  )
}

export function Head() {
  return (
    <title>caffeinjunkie | Home</title>
  )
}

export const query = graphql`
  query PhotoQuery {
    allSanityPhoto(limit: 10, sort: { order: DESC, fields: _createdAt }) {
      nodes {
        _id
        thumbnailUrl
        url
        views
        title
      }
    }
}
`
