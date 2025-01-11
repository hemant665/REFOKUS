import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const NavBtn = ({title}) => {
  return (
    <div className='bg-slate-50 px-4 py-1 rounded-full text-black flex justify-center items-center gap-3'>
      <button className='text-sm font-medium pointer'>{title} </button>
      <IoIosReturnRight />
    </div>
  )
}

export default NavBtn