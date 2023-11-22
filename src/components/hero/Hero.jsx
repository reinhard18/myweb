import React from 'react';
import "./hero.scss";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <div className="text-container">
            <h2>Reinhard Silaen</h2>
            <h1>Fullstack Developer</h1>
        </div>
        <div className="buttons">
            <button>See the latest work</button>
            <button>Contact Me</button>
        </div>
        <img src="./scroll.png" alt="" />
        </div>
    </div>
  )
}

export default Hero