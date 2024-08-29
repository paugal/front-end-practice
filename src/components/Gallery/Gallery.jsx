import React from 'react'
import './Gallery.css'
import GalleryItem from "./GalleryItem"

export default function Gallery() {
  return (
    <div className='gallery'>
      <GalleryItem></GalleryItem>
      <div className='gallery-item'> Contact Form </div>
      <div className='gallery-item'> Flight Booker </div>
      <div className='gallery-item'> Progress Bar </div>
    </div>

  )
}
