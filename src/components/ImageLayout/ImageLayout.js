import React from 'react';
import CameraIcon from '@mui/icons-material/Camera';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import { Info } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';

import { FancyBox } from '../FancyBox'
import CameraIsoIcon from '../../assets/svgIcons/CameraIsoIcon';

export default function ImageLayout({ data }) {
  const [overlayMobileVisible, setOverlayMobileVisible] = React.useState(false);
  const { title, url: fileName, _id: key, cameraMetadata } = data;
  const { camera, lens, settings } = cameraMetadata;
  const imgBaseUrl = 'https://ik.imagekit.io/caffeinjunkie';
  const responsiveThumbnail = `${imgBaseUrl}/tr:w-0.4/${fileName}`;
  const largeImg = `${imgBaseUrl}/tr:w-0.8/${fileName}`;
  const styles = useSpring({ opacity: overlayMobileVisible ? 1 : 0 })
  const getMetadataValues = ([metadataKey, value]) => {
    switch (metadataKey) {
      case 'iso': return {
        Icon: CameraIsoIcon,
        text: value,
        metadataKey
      }
      case 'shutterSpeed': return {
        Icon: ShutterSpeedIcon,
        text: `${value} s`,
        metadataKey
      }
      case 'aperture': return {
        Icon: CameraIcon,
        text: `f ${value}`,
        metadataKey
      }
    }
  }
  
  const renderImage = () => (
    <div className="relative">
      <img
        className="w-full block object-cover aspect-square"
        src={responsiveThumbnail}
        alt={title}
        id={key}
        loading="lazy"
      />
    </div>
  )
  
  const renderMetadata = ({ Icon, text, metadataKey }) => (
    <div
      key={metadataKey}
      className="flex
        text text-white font-inter font-normal md:font-light text-xl text-left
        gap-3 xl:gap-2 items-center"
    >
      <Icon className="text-white"/>
      {text}
    </div>
  )
  
  const renderOverlayMobile = () => (
    <div className="
      flex flex-col w-full h-full
      items-center justify-center gap-8
      image-container aspect-square
      bg-black bg-opacity-80"
    >
      {renderOverlay()}
    </div>
  )
  
  const renderOverlayWeb = () => (
    <div className="
      flex flex-col w-full h-full
      items-center justify-center gap-8
      overlay"
    >
      {renderOverlay()}
    </div>
  )
  
  const renderOverlay = () => {
    const cameraAndLensMetadataValue = {
      Icon: CameraAltIcon,
      text: `${camera} + ${lens}`,
      metadataKey: 'cameraAndLens'
    }
    
    return (
      <>
        <div className="flex text text-white font-inter font-semibold px-8 text-3xl text-center">
          {title}
        </div>
        <div
          className="flex flex-col w-fit mx-12 xl:mx-8 2xl:mx-14 xl:px-4 items-start justify-center gap-1">
          {renderMetadata(cameraAndLensMetadataValue)}
          {Object.entries(settings).map((metadata) => renderMetadata(getMetadataValues(metadata)))}
        </div>
      </>
    )
  }
  
  return (
    <div className="relative">
      <FancyBox options={{ infinite: false }}>
        <div
          key={key}
          className="image-container aspect-square"
          data-fancybox="gallery"
          data-src={largeImg}
          role="presentation"
        >
          {renderImage()}
          {!overlayMobileVisible && renderOverlayWeb()}
        </div>
      </FancyBox>
      <div
        className="flex w-full absolute justify-end top-0 md:hidden">
        <animated.div style={styles} className="w-full absolute">
          {overlayMobileVisible && renderOverlayMobile()}
        </animated.div>
        <div
          onClick={() => setOverlayMobileVisible(!overlayMobileVisible)}
          className="p-4 absolute justify-end top-0 text-white"
        >
          {overlayMobileVisible ? <CloseIcon fontSize="large"/> : <Info className="opacity-60" fontSize="large"/> }
        </div>
      </div>
    </div>
  )
}
