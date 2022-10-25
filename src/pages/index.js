import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { initializeApp } from 'firebase/app';
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { Lightbox } from 'react-modal-image';
import { graphql } from 'gatsby';

import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import useImagePreloader from '../hooks/useImagePreloader';
import lottieOptions from './config';
import config from '../config';

const { firebase: firebaseConfig } = config;

export default function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { allSanityPhoto: { nodes: photos } } = data;
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  const { imagesPreloaded = false } = useImagePreloader(photos)
  const [isLoading, setIsLoading] = useState(true);
  const [allViews, setAllViews] = useState([]);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  async function getViews() {
    const viewsCol = collection(db, 'views');
    const viewSnapshot = await getDocs(viewsCol);
    return viewSnapshot.docs.map(val => val.data());
  }
  
  React.useEffect(() => {
    async function fetchData() {
      const res = await getViews();
      setIsLoading(!imagesPreloaded && !res)
      setAllViews(res)
    }
    
    fetchData();
  })
  
  const selectImage = async (photo, views) => {
    setIsOpen(true);
    setSelectedPhoto(photo);
    
    await setDoc(doc(db, "views", photo._id), {
      id: photo._id,
      views: views + 1
    });
  }
  
  const unselectImage = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  }
  
  const renderImage = (photo) => {
    let views = 0;
    try {
      views = allViews.filter(({ id }) => id === photo._id)[0].views;
    } catch (e) {
      views = 0;
    }
    return (
      <Image
        key={photo._id}
        data={photo}
        views={views}
        onClick={() => selectImage(photo, views)}
      />
    )
  }
  
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
      {isLoading && renderLoadingOverlay()}
      {!isLoading && <div
        className="
        px-0 gap-0
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {photos.map(renderImage)}
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
        title
      }
    }
}
`
