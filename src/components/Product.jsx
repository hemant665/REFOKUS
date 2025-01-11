import React from 'react'
import NavBtn from './NavBtn'

const Product = ({value}) => {
  return (
    <div className={`w-full h-60 flex items-center justify-around relative border-b-[1px]  hover:${value.bgColor} `}>
      <span className='text-3xl font-semibold w-[15%]'>{value.name}</span>
      {/* <img src={value.url} className='h-80  bg-green-500 absolute' alt="" /> */}
      <span className='w-2/6 text-xs'>
            <h1>{value.description}</h1>
            <span className='flex mt-8 gap-4'>
                  {value.live === true ? (<NavBtn title={value.live === true && "Live"}/>): ""}
                  {value.case === true ? (<NavBtn title={value.case === true && "Case Study"}/>): ""}
            </span>
      </span>
    </div>
  )
}

export default Product