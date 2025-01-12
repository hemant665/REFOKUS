import React from 'react'
import { motion } from 'motion/react';
import { IoIosArrowRoundForward } from "react-icons/io";



const Card = ({ head1, head2, body, btn, width ,boton,hoverbg="false"}) => {


      return (
            <>
                  <motion.div className={`min-h-80 ${width} p-5 bg-zinc-800 rounded-xl flex flex-col justify-between `} whileHover={{backgroundColor: hoverbg === 'true' && "#7443ff" , padding: "25px"}} >
                        <div className='flex flex-col'>
                              <div className='flex justify-between'>
                                    <p className='font-thin text-sm'>{head1}</p>
                                    <span className='text-2xl'> <IoIosArrowRoundForward /> </span>
                              </div>
                              <div className='mt-4'>
                                    <h1 className='text-3xl'>{head2}</h1>
                              </div>
                        </div>
                        <div className='flex w-full flex-col'>
                              <span className='text-6xl leading-none font-semibold'>{body}</span>
                              <span className='font-thin'>{boton}</span>
                              {
                                    btn === true && (
                                          <button className='w-[22%] px-3 py-1 rounded-full border border-zinc-400 mt-3'>Contact us</button>
                                    )
                              }
                        </div>
                  </motion.div>
            </>
      )
}

export default Card