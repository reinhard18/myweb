import Sidebar from "../../components/sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion";

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="wrapper">
            <span>REINHARD</span>
            <div className="social">
            <motion.div  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}><a href="https://www.linkedin.com/in/reinhard-s/"><img src="/linkedin.png" alt="" title="Linkedin" /></a> </motion.div>
            <motion.div  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}><a href="https://github.com/reinhard18/"><img src="/github.svg" className="github" alt="" title="Github"/></a></motion.div>
            <motion.div  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}><a href="/Resume_Reinhard.pdf"><img src="/resume.png" alt="" title="Resume"/></a></motion.div>
            
            
            
            </div>
        </div>
    </div>
  )
}

export default Navbar