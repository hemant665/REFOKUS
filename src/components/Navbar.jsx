import React from 'react'
import NavBtn from './NavBtn'

const Navbar = () => {
      return (
            <div className='max-w-screen-lg mx-auto p-5 text-white flex items-center justify-between border-b-[1px] border-zinc-700'>
                  <div className='flex ' >
                        <h1>REFOKUS</h1>
                        <div className='flex gap-10 ml-20 '>
                              {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                                    <a key={index} className='text-sm flex justify-center items-center gap-1' href='#'>
                                          {index === 1 ? (<span className='inline-block w-[4px] h-1 rounded-full bg-green-500' style={{ boxShadow: " 0 0 .45rem #00FF19" }}></span>) : ""}
                                          {elem.length === 0 ? (<span className='h-6 w-[1px] bg-cyan-50'></span>) : ""}
                                          {elem}
                                    </a>
                              ))}
                        </div>
                  </div>
                  <div className=''>
                        <NavBtn title={"Get Started"}/>
                  </div>
            </div>
      )
}

export default Navbar
