import React from 'react'



const Work = () => {

      const images = [
            {url:"", top: "50%", left: "50%", isActive: false},
            {url:"", top: "56%", left: "44%", isActive: false},
            {url:"", top: "45%", left: "56%", isActive: false},
            {url:"", top: "60%", left: "53%", isActive: false},
            {url:"", top: "43%", left: "40%", isActive: false},
            {url:"", top: "65%", left: "55%", isActive: false},
      ]


  return (
    <div className='w-full p-3 text-white flex justify-center mt-10'>
      <div className="max-w-screen-xl mx-auto relative">
            <h1 className='leading-none text-[28rem] font-medium select-none'>work</h1>
            <div className='absolute h-full w-full top-0'>
                  {images.map((elem,index)=> {
                        return <img src={elem.url} key={index} className='absolute w-60 rounded-lg' alt="" />
                  })}
            </div>
      </div>
    </div>
  )
}

export default Work