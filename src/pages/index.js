import React from 'react';
import Lottie from 'react-lottie';
import { graphql } from 'gatsby';

import { ImageLayout } from '../components/ImageLayout';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import useImagePreloader from '../hooks/useImagePreloader';
import * as loadingAnimation from '../assets/animation/loadingAnimation.json'

export default function Home({ data }) {
  const { allSanityPhoto: { nodes: photos } } = data;
  const { imagesPreloaded = false } = useImagePreloader(photos)
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  const renderImage = (photo) => (
    <ImageLayout
      key={photo._id}
      data={photo}
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
        {photos.map(renderImage)}
      </div>}
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
    allSanityPhoto(sort: { order: DESC, fields: _createdAt }) {
      nodes {
        _id
        url
        views
        title
        cameraMetadata {
          camera
          lens
          settings {
            iso
            aperture
            shutterSpeed
          }
        }
      }
    }
}`
