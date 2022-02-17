import React from 'react'
import "./clientCard.css";

const ClientCard = ({logo}) => {

    const img = logo.logo;
  return (
    <div className='clientCardStyles'>
        <img src={img} alt = '' className='clientImgStyles'/>
    </div>
  )
}

export default ClientCard