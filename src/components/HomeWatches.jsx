import './HomeWatches.scss'
import { motion } from 'framer-motion'

function HomeWatches() {
  return (
    <>
        <section>
            <motion.div
                className=''
                initial={{ opacity: 0, x: 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }} 
                viewport={{ once: true, amount: 0 }}
            >
                <span></span>
            </motion.div>
        </section>
    
    
    </>
  )
}

export default HomeWatches