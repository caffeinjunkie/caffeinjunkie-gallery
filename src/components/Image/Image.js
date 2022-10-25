import React from 'react';
import Lottie from 'react-lottie';

import lottieOptions from './Image.config';
import EyeIcon from '../../assets/svgIcons/EyeIcon';

export default function Image({ data, onClick }) {
  const [isStopped, setIsStopped] = React.useState(true);
  const { thumbnailUrl, title, id, views } = data;
  
  const renderImage = () => (
    <img
      className="w-full block object-cover aspect-square"
      src={thumbnailUrl}
      alt={title}
      loading="lazy"
    />
  )
  
  const renderLottieAnimation = () => (
    <div className="hidden sm:flex">
      <Lottie
        options={lottieOptions}
        height={26}
        width={26}
        isStopped={isStopped}
      />
    </div>
  )
  
  const renderStaticEyeIco = () => (
    <div className="sm:hidden">
      <EyeIcon />
    </div>
  )
  
  const renderOverlay = () => (
    <div className="overlay flex flex-col items-center justify-center">
      <div className="text text-white font-inter text-2xl font-thin text-center">
        {title}
      </div>
      <div className="flex gap-2 flex-row items-center justify-center">
        {renderLottieAnimation()}
        {renderStaticEyeIco()}
        <div className="text text-white font-inter text-xl text-center">
          {views}
        </div>
      </div>
    </div>
  )
  
  return (
    <div
      key={id}
      className="image-container aspect-square"
      onClick={onClick}
      onMouseEnter={() => setIsStopped(false)}
      onMouseLeave={() => setIsStopped(true)}
      role="presentation"
    >
      {renderImage()}
      {renderOverlay()}
    </div>
  )
}
