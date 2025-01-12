import React from 'react'
import { motion } from 'motion/react'


const Marquee = ({ value , direction}) => {
  return (
    <div className='flex w-full gap-10  overflow-hidden'>
      <motion.div className='flex flex-shrink-0 gap-20 py-10 pr-14 ' initial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease: "linear", duration: 10, repeat: Infinity}}>
        {value.map((url, index) => <img src={url} key={index} className='w-32 h-14 ' alt="" />)}
      </motion.div>
      <motion.div className='flex flex-shrink-0 gap-20 py-10 pr-14 ' initial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease: "linear", duration: 10, repeat: Infinity}}>
        {value.map((url, index) => <img src={url} key={index} className='w-32 h-14 ' alt="" />)}
      </motion.div>

    </div>
  )
}

export default Marquee