import React from 'react'

const Marquee = ({value}) => {
  return (
    <div className='flex py-10 w-full gap-10 whitespace-nowrap overflow-hidden'>
      {value.map((url,index) =>  <img src={url} key={index} className='h-7 w-[7vw] flex-shrink-0' alt="" />)}
      {value.map((url,index) =>  <img src={url} key={index} className='h-7 w-[7vw] flex-shrink-0' alt="" />)}
    </div>
  )
}

export default Marquee