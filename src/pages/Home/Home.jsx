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
        className="home-quote-c"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }} 
        viewport={{ once: true, amount: 0 }}
      >
        <span className='home-quote'>
          “When I visited the Hublot manufacture in Switzerland for the first time, I realised to what extent the traditional know-how, precision, futuristic technology and craftsmanship were all intertwined in the creation of a watch. Bringing my art into the creativity of these watchmakers represents a unique adventure for me.”
        </span><br />
        <span>
          Takashi Murakami
        </span><br />
        <span>
          Contemporary Artist
        </span>
      </motion.div>

      <section className="home-img-feature">
        <motion.div
          className='takashi-feat-01'
          initial={{ opacity: 0, x: -100, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }} 
          viewport={{ once: true, amount: 0 }}
        >
          <img src={takashiFeature01} alt="" />
        </motion.div>
        <motion.div
          className='takashi-feat-02'
          initial={{ opacity: 0, x: 100, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }} 
          viewport={{ once: true, amount: 0 }}
        >
          <img src={takashiFeature02} alt="" />
        </motion.div>
      </section>

      <HomeWatches />


      <section className='home-feature white-bg'>
        
        <div className="hublot-feature-text">
          <span>takashi murakami</span>
          <h1>sapphire<br/>rainbow</h1>
          <span className='hublot-price'>42mm &nbsp;&nbsp;cad 158,000</span>
          <br />
          <button className='h-sapphire-btn'>shop now</button>
        </div>
        <img src={watchFeature} alt="" />
      </section>

      <section className='home-feature'>
        <div className='hublot-spin-vid-c' >
          <video autoPlay loop muted playsInline >
            <source src={hublotSpin} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div
          className='hublot-feature-text'
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