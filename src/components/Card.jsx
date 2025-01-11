import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ head1, head2, body, botom, width }) => {
      return (
            <>
                  <div className='w-full'>

                        <div className={`h-80 w-${width} p-5 bg-slate-800 rounded-xl flex flex-col justify-between`}>
                              <div>
                                    <div className='flex justify-between'>
                                          <p className='font-thin text-sm'>{head1}</p>
                                          <span className='text-2xl'> <IoIosArrowRoundForward /> </span>
                                    </div>
                                    <div className='mt-4'>
                                          <h1 className='text-3xl'>{head2}</h1>
                                    </div>
                              </div>
                              <div className='flex flex-col'>
                                    <span className='text-6xl'>{body}</span>
                                    <span className='font-thin'>{botom}</span>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Card