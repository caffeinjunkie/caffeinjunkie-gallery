import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Lightbox } from 'react-modal-image';
import ReactLoading from 'react-loading';

import { Layout } from '../components/Layout'
import useImagePreloader from '../hooks/useImagePreloader';

export default function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { allSanityPhoto: { nodes: photos } } = data;
  const filteredUrl = photos.map((photo) => photo.url);
  
  const { imagesPreloaded } = useImagePreloader(filteredUrl)
  
  const selectImage = (value) => {
    setIsOpen(true);
    setSelectedPhoto(value);
  }
  
  const unselectImage = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  }
  
  const renderImage = (photo) => {
    const { thumbnailUrl, title, id } = photo;
    return (
      <div
        key={id}
        className="image-container bg-stone-200 aspect-square"
        onClick={() => selectImage(photo)}
      >
        <img
          className="w-full block object-cover aspect-square"
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
        />
        <div className="overlay flex items-center justify-center">
          <div className="text text-white font-inter text-2xl font-thin text-center">
            {title}
          </div>
        </div>
      </div>
    )
  }
  
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  
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

export const query = graphql`
  query MyQuery {
    allSanityPhoto(limit: 10) {
      nodes {
        id
        thumbnailUrl
        url
        views
        title
      }
    }
  }
`

