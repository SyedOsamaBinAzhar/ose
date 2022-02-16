import React from 'react';
import "./textComponent.css";

const TextComponent = ({heading, text}) => {
  return (
    <div className='textComponentContainer'>
      <div className='headingAndLineContainer flex-row'>
          <div className="missionLine"></div>
          <h1>{heading}</h1>
      </div>
        <p>{text}</p>
    </div>
  )
}

export default TextComponent