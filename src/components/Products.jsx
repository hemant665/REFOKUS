import React from 'react'
import Product from './Product'

const Products = () => {


      const data = [
            {name:'Cula' , url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A).webp' , description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", bgColor:"bg-neutral-800" , live:true, case:true},
            {name:'Arqitel' , url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A).webp' , description:"We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",bgColor:"bg-blue-700", live:true, case:false },
            {name:'BCG Platinion' , url:'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A).webp' , description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates." , bgColor:"bg-gray-700",live:true, case:true},
      ]

  return (
    <div className='w-full px-4 py-2 mt-20'>
      {data.map((elem,index)=>  <Product key={index} value={elem} className="bg-neutral-400"/> )}
     
    </div>
  )
}

export default Products