import React from 'react';
import { FancyBox } from "../FancyBox"

export default function Image({ data }) {
  const { title, id, url } = data;
  console.log(url, 'urlll')
  const imgBaseUrl = 'https://ik.imagekit.io/caffeinjunkie/';
  const responsiveThumbnail = `${imgBaseUrl}/tr:w-600/${url}`
  const largeImg = `${imgBaseUrl}/${url}`
  
  const renderImage = () => (
    <img
      className="w-full block object-cover aspect-square"
      src={responsiveThumbnail}
      alt={title}
      loading="lazy"
    />
  )
  
  const renderOverlay = () => (
    <div className="overlay flex flex-col items-center justify-center">
      <div className="text text-white font-inter text-2xl font-thin text-center">
        {title}
      </div>
    </div>
  )
  
  return (
    <FancyBox options={{ infinite: false }}>
      <div
        key={id}
        className="image-container aspect-square"
        data-fancybox="gallery"
        data-src={largeImg}
        role="presentation"
      >
        {renderImage()}
        {renderOverlay()}
      </div>
    </FancyBox>
  )
}
