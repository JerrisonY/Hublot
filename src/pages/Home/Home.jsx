import './Home.scss'
import { motion } from 'framer-motion'
import RotateDevice from '../../components/RotateDevice.jsx'
import HomeVideo from '../../components/HomeVideo.jsx'

import hublotSpin from '../../assets/img/home/hublotspin.mp4'

function LandingPage() {

  return (
    <>
      <RotateDevice />
      <HomeVideo />


      <section className='home-feature'>
        <div className='hublot-spin-vid-c' >
          <video autoPlay loop muted playsInline >
            <source src={hublotSpin} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div
          className='hublot-spin-text'
        >
          <span>takashi murakami</span>
          <h1>color<br/>stone</h1>
          <span className='hublot-price'>45mm &nbsp;&nbsp;cad 168,000</span>
          <br />
          <button>shop now</button>
        </motion.div>
      </section>
    </>
  )
}

export default LandingPage