import './HomeVideo.scss'
import { motion } from 'framer-motion'

import video from '../assets/video/hublotVideo.mp4'

function HomeVideo() {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.9, delay: 0.2 }} 
    >
        <div className="video-container">
            <video autoPlay loop muted playsInline>
                <source src={video} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>

        <motion.div 
            className='video-text-c'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 1, delay: 1.3 }} 
        >
            <p className='video-subheader'>CLASSIC FUSION</p>
            <h1 className='video-header'>TAKASHI<br />MURAKAMI</h1>
            <a className="video-shop" href='https://www.hublot.com/en-ca' target='_blank'>SHOP NOW <i class="fa-solid fa-arrow-right"></i></a>
        </motion.div>

        <span className="icon-scroll-text">scroll down</span>
        <div class='icon-scroll'></div>
    </motion.div>
  )
}

export default HomeVideo