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
    </motion.div>
  )
}

export default HomeVideo