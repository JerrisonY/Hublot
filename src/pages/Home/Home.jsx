import './Home.scss'
import { motion } from 'framer-motion'
import RotateDevice from '../../components/RotateDevice.jsx'
import HomeVideo from '../../components/HomeVideo.jsx'
import HomeWatches from '../../components/HomeWatches.jsx'

import takashiFeature01 from '../../assets/img/home/takashi1.jpg'
import takashiFeature02 from '../../assets/img/home/takashi2.jpg'
import watchFeature from '../../assets/img/home/watchfeature01.png'
import hublotSpin from '../../assets/img/home/hublotspin.mp4'


function LandingPage() {

  return (
    <>
      <RotateDevice />
      <HomeVideo />

      <motion.div
        className="home-bio-c"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }} 
        // viewport={{ once: true, amount: 0 }}
      >
        <h1>revolutionary</h1>
        <p>
          Takashi Murakami is an international star, not only in contemporary art circles but also with the general public. He masterfully achieves this result by combining leading-edge multimedia tools with traditional Japanese techniques such as gold leaf. His visually very modern style offers a subtle reflection between Japanese tradition and pop culture. A real rock star in the contemporary art world, he coined the name Superflat for the artistic movement he began.
        </p>
        <button>
          read more
        </button>
      </motion.div>

      <section className="home-img-feature">
        <motion.div
          className='takashi-feat-01'
          initial={{ opacity: 0, x: -40, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }} 
          // viewport={{ once: true, amount: 0 }}
        >
          <img src={takashiFeature01} alt="" />
        </motion.div>
        <motion.div
          className='takashi-feat-02'
          initial={{ opacity: 0, x: 40, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }} 
          // viewport={{ once: true, amount: 0 }}
        >
          <img src={takashiFeature02} alt="" />
        </motion.div>
      </section>

      <HomeWatches />


      <section className='home-feature white-bg'>
        <motion.div 
          className="hublot-feature-text sapphire-width"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }} 
          // viewport={{ once: true, amount: 0 }}
        >
          <span>takashi murakami</span>
          <h1>sapphire<br/>rainbow</h1>
          <span className='hublot-price'>42mm &nbsp;&nbsp;cad 158,000</span>
          <br />
          <button className='h-sapphire-btn'>shop now</button>
        </motion.div>
        <motion.div
          className='h-sapphire-img-c'
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0 }} 
          // viewport={{ once: true, amount: 0 }}
        >
          <img src={watchFeature} alt="" />
        </motion.div>
      </section>

      <section className='home-feature'>
        <motion.div 
          className='hublot-spin-vid-c' 
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }} 
          // viewport={{ once: true, amount: 0 }}
        >
          <video autoPlay loop muted playsInline >
            <source src={hublotSpin} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <motion.div 
          className='hublot-feature-text'
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0 }} 
          // viewport={{ once: true, amount: 0 }}
        >
          <span className='white-text'>takashi murakami</span>
          <h1 className='white-text'>color<br/>stone</h1>
          <span className='hublot-price white-text'>45mm &nbsp;&nbsp;cad 168,000</span>
          <br />
          <button className='h-colorstone-btn'>shop now</button>
        </motion.div>
      </section>

      
    </>
  )
}

export default LandingPage