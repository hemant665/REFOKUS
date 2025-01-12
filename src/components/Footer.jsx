import React from 'react'

const Footer = () => {
      return (
            <>
                  <div className='w-full'>
                        <div className='mt-20 max-w-screen-lg mx-auto flex gap-10 pb-11'>
                              <div className=' w-full '>
                                    <h1 className='text-[11rem] leading-none tracking-tight font-semibold'>refokus.</h1>
                                    <div className='flex text-zinc-500 mt-6 gap-9 text-sm'>
                                          {
                                                ["Privacy Policy","Cookie Policy","Impressum","Terms"].map((items, index) => <a className='hover:text-zinc-400' key={index}> {items} </a>)
                                          }
                                    </div>
                              </div>

                              <div className=' w-full flex justify-between gap-8 text-sm '>
                                    <div className='mt-3'>
                                          <h1 className='text-gray-400'>Social</h1>

                                          <div className='mt-6 text-gray-400 flex flex-col gap-2'>
                                                {
                                                      ["Instagram", "Twitter", "LinkdIn"].map((items, index) => <a className='hover:text-blue-700' key={index}> {items} </a>)
                                                }
                                          </div>
                                    </div>
                                    <div className='mt-3'>
                                          <h1>Sitemap</h1>
                                          <ul className='mt-6 text-gray-400 flex flex-col gap-2'>
                                                {
                                                      ["Home","Work","Careers","Contact"].map((items, index) => <a className='hover:text-blue-700' key={index}> {items}</a>)
                                                }
                                          </ul>
                                    </div>
                                    <div className='flex flex-col justify-center items-end text-end'>
                                          <p>Refokus is a pinoneering digital agency driven by design and empowered by technology.</p>
                                          <button className='bg-blue-600 px-2 py-1 rounded mt-6'><img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className='w-36' alt="" /></button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Footer