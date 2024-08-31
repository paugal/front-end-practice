import React from 'react'
import './Gallery.css'
import GalleryItem from "./GalleryItem"

const componentList = ['Accordion', 'Report Form', 'Flight Booker', 'Load File']

export default function Gallery() {
  return (
    <div className='gallery'>
      {componentList.map((el, index) =>
        <GalleryItem componentName={el} key={index} />
      )}
    </div>

  )
}
