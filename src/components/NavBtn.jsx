import React from 'react'
import { motion } from 'motion/react';
import { IoIosReturnRight } from "react-icons/io";

const NavBtn = ({title}) => {
  return (
    <motion.div 
      whileTap={{ scale: 0.9 }}
    className='bg-slate-50 px-4 py-1 rounded-full text-black flex justify-center items-center gap-3'>
      <button className='text-sm font-medium pointer'> {title} </button>      
      <IoIosReturnRight />
    </motion.div>
  )
}

export default NavBtn