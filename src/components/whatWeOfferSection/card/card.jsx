import React from 'react'
import "./card.css";

const Card = ({ data }) => {

  return (
    <div className='cardStyles' 
      style={{backgroundImage : `url(${data.img})`, backgroundSize : "100%, cover"}}
    >
        {/* <img src={data.img} className = "imgStyles"/> */}
        <h1>{data.txt}</h1>
    </div>
  )
}

export default Card