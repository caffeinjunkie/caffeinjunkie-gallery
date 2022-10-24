import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Lightbox } from 'react-modal-image';
import ReactLoading from 'react-loading';

import { Layout } from '../components/Layout'
import { Image } from '../components/Image'
import { SEO } from '../components/SEO'
import useImagePreloader from '../hooks/useImagePreloader';

export default function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { allSanityPhoto: { nodes: photos } } = data;
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  const { imagesPreloaded } = useImagePreloader(photos)
  
  const selectImage = (value) => {
    setIsOpen(true);
    setSelectedPhoto(value);
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
      justify-center
      "
      style={style}
    >
      <ReactLoading
        type="cylon"
        color="#1e293b"
      />
    </div>
  )
  
  return (
    <Layout>
      <SEO title="Home" />
      {!imagesPreloaded && renderLoadingOverlay()}
      {imagesPreloaded && <div
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
        views
        title
      }
    }
  }
`

