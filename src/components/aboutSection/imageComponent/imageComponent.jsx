import React from 'react'
import "./imageComponent.css";
const ImageComponent = ({image}) => {
  return (
    <img src={image} alt = '' className='image'/>
  )
}

export default ImageComponent