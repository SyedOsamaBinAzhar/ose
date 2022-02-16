import React from 'react'
import "./card.css";

const Card = ({ data }) => {

  return (
    <div className='cardStyles' 
      style={{backgroundImage : `url(${data.img})`, backgroundSize : "100% 100%, cover"}}
    >
        <h1>{data.txt}</h1>
    </div>
  )
}

export default Card