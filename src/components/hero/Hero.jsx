import React from 'react';
import "./hero.scss";
import {motion} from "framer-motion";


const textVariants ={
  initial : {
    x : -500,
    opacity : 0,
  },
  animate : {
    x : 0,
    opacity: 1,
    transition: {
      duration: 1,
      stagerChildren: 0.1,
    },
  },
  scrollButton : {
    opacity: 0, 
    y: 10,
    transition:{
      duration: 2,
      repeat: Infinity,
    }
  }
}


const sliderVariants ={
  initial : {
    x : 0,
  },
  animate : {
    x : "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
}

const Hero = () => {
  return (
    
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="text-container" variants={textVariants} initial="initial" animate = "animate"> 
          <motion.h2 variants={textVariants}>Reinhard Silaen</motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Developer</motion.h1> 
          <div className="buttons">
            <motion.button variants={textVariants}>See the latest work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </div>
          <motion.img variants={textVariants} src="./scroll.png" animate= "scrollButton" alt="" />
        </motion.div>
        <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate = "animate">
          ReactJS NEXTJS Laravel
        </motion.div>

      </div>
    </div>
  );
}

export default Hero