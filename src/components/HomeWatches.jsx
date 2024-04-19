import './HomeWatches.scss'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import watchOne from '../assets/img/home_watches/1.png'
import watchTwo from '../assets/img/home_watches/2.png'
import watchThree from '../assets/img/home_watches/3.png'
import watchFour from '../assets/img/home_watches/4.png'
import watchFive from '../assets/img/home_watches/5.png'

function HomeWatches() {
  return (
    <>
        <section className='h-explore-c'>
            <h1 className='explore-header'>explore more watches</h1>
            <div className='h-explore-watch-c'>    
                <motion.div
                    className='explore-watch'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }} 
                    // viewport={{ once: true, amount: 0 }}
                >
                    <NavLink to='/'><img src={watchOne} alt="" /></NavLink>
                </motion.div>            
                <motion.div
                    className='explore-watch'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }} 
                    // viewport={{ once: true, amount: 0 }}
                >
                    <NavLink to='/'><img src={watchTwo} alt="" /></NavLink>
                </motion.div>
                <motion.div
                    className='explore-watch'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }} 
                    // viewport={{ once: true, amount: 0 }}
                >
                    <NavLink to='/'><img src={watchThree} alt="" /></NavLink>
                </motion.div>
                <motion.div
                    className='explore-watch'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }} 
                    // viewport={{ once: true, amount: 0 }}
                >
                    <NavLink to='/'><img src={watchFour} alt="" /></NavLink>
                </motion.div>
                <motion.div
                    className='explore-watch'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }} 
                    // viewport={{ once: true, amount: 0 }}
                >
                    <NavLink to='/'><img src={watchFive} alt="" /></NavLink>
                </motion.div>
                
            </div>
        </section>
    
    
    </>
  )
}

export default HomeWatches