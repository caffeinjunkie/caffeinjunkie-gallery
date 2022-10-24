import React from 'react';

export default function Image({ data, onClick }) {
  const { thumbnailUrl, title, id } = data;
  
  const renderImage = () => (
    <img
      className="w-full block object-cover aspect-square"
      src={thumbnailUrl}
      alt={title}
      loading="lazy"
    />
  )
  
  const renderOverlay = () => (
    <div className="overlay flex items-center justify-center">
      <div className="text text-white font-inter text-2xl font-thin text-center">
        {title}
      </div>
    </div>
  )
  
  return (
    <div
      key={id}
      className="image-container aspect-square"
      onClick={onClick}
    >
      {renderImage()}
      {renderOverlay()}
    </div>
  )
}
