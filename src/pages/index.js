import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Lightbox } from 'react-modal-image';

import { Layout } from '../components/Layout'
import useImagePreloader from '../hooks/useImagePreloader';

export default function Home({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { allSanityPhoto: { nodes: photos } } = data;
  const filteredUrl = photos.map((photo) => photo.url);
  console.log(filteredUrl, 'fil')
  
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
  
  const renderLoadingOverlay = () => (
    <div>
      <p className="w-full text-inter bg-white text-center py-24">Loading images</p>
    </div>
  )
  
  return (
    <Layout>
      <div
        className="
        px-0 gap-0
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {imagesPreloaded && photos.map(renderImage)}
      </div>
      {!imagesPreloaded && renderLoadingOverlay()}
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

