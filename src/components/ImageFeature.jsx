import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import './ImageFeature.scss'

import video from '../assets/video/sapphirevideo.mp4'
import hublotLight from '../assets/img/image_feature/hublotlight.jpg'
import hublotDark from '../assets/img/image_feature/hublotdark.jpeg'

function ImageFeature() {
  return (
    <div className='image-feat-c'>
        <div className='image-feat-one'>
            <motion.div 
                className='img-one-text-c'
                initial={{ opacity: 0, x: -60, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }} 
                viewport={{ once: true, amount: 0 }}
            >
                <h1>tourbillion<br /> sapphire</h1>
                <img src="public/borderthick.svg" alt="" />
                <p>With just 50 pieces available, the MP-15 is the first limited edition Hublot watch with a central flying tourbillon. This quirky, playful, yet high-tech model offers a magnificent interpretation of the visual effects of sapphire.</p>
                <NavLink 
                    to='https://www.hublot.com/en-ca/watches/mp/mp-15-takashi-murakami-tourbillon-sapphire-42-mm'
                    target='_blank'
                >
                    discover
                </NavLink>
            </motion.div>
            <motion.div 
                className="sapphire-vid-c"
                initial={{ opacity: 0, x: 60, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }} 
                viewport={{ once: true, amount: 0 }}
            >
                <video autoPlay loop muted playsInline>
                    <source src={video} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </div>

        <div className='image-feat-two'>
            <img src={hublotDark} alt="" />
            <div className='img-two-text-c'>
                <h1>the new luxe</h1>
            </div>
        </div>
    </div>
  )
}

export default ImageFeature