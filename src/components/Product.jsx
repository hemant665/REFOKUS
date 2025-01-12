import React from 'react'
import NavBtn from './NavBtn'

const Product = ({ value , index ,mover}) => {
  return (
    <div className={`w-full h-[20rem] relative border-b-[1px]  hover:${value.bgColor} `}>
      <div onMouseEnter={()=> {mover(index)}} className='max-w-screen-xl mx-auto h-full flex justify-between items-center' >

        <span className='text-3xl font-semibold w-[15%]'>{value.name}</span>

        <div className='w-2/6 text-xs'>
          <h1>{value.description}</h1>
          <div className='flex mt-8 gap-4'>
            {value.live === true ? (<NavBtn title={value.live === true && "Live"} />) : ""}
            {value.case === true ? (<NavBtn title={value.case === true && "Case Study"} />) : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product