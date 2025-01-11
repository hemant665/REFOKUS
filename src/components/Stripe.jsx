import React from 'react'

const Stripe = ({elem,index}) => {
  return (
    <div className='border border-l-0 w-1/6 px-5 py-3 flex justify-between items-center'>
      <img src={elem.url}  className =' h-10 w-28' alt="" />
      <span className='font-semibold'> {elem.number}</span>
    </div>
  )
}

export default Stripe