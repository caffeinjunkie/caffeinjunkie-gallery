import { useEffect, useState } from 'react';

export function preloadImage (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.onerror = img.onabort = () => {
      reject(src)
    }
    img.src = src
  })
}

export default function useImagePreloader(imageList) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false)
  
  useEffect(() => {
    let isCancelled = false
    
    async function effect() {
      
      if (isCancelled) {
        return
      }
      
      const imagesPromiseList = []
      for (const { url } of imageList) {
        const imgBaseUrl = 'https://ik.imagekit.io/caffeinjunkie/';
        const largeImg = `${imgBaseUrl}/${url}`
        imagesPromiseList.push(preloadImage(largeImg))
      }
      
      await Promise.all(imagesPromiseList)
      
      if (isCancelled) {
        return
      }
      
      setImagesPreloaded(true)
    }
    
    effect()
    
    return () => {
      isCancelled = true
    }
  }, [imageList])
  
  return { imagesPreloaded, preloadImage }
}
