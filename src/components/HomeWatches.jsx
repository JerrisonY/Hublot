import './HomeWatches.scss'
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import watchOne from '../assets/img/home_watches/1.png'
import watchTwo from '../assets/img/home_watches/2.png'
import watchThree from '../assets/img/home_watches/3.png'
import watchFour from '../assets/img/home_watches/4.png'
import watchFive from '../assets/img/home_watches/5.png'

const watches = [
    {
        image: watchOne,
        name: 'novelties'
    },
    {
        image: watchTwo,
        name: 'big bang'
    },
    {
        image: watchThree,
        name: 'classic fusion'
    },
    {
        image: watchFour,
        name: 'shaped'
    },
    {
        image: watchFive,
        name: 'mp'
    },
]

function HomeWatches() {

  return (
    <>
        <section className='h-explore-c'>
            <h1 className='explore-header'>explore more watches</h1>
            <div className='h-explore-watch-c'>    
                {watches.map((watch, index) =>(
                    <motion.div
                        key={index}
                        className='explore-watch'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <NavLink to='https://www.hublot.com/en-ca' target='_blank'>
                            <img src={watch.image} alt="" />
                        </NavLink>
                        <div className='red-border'></div>
                        <p className='watch-name'>{watch.name}</p>
                    </motion.div>
                ))}    
            </div>
        </section>
    
    
    </>
  )
}

export default HomeWatches