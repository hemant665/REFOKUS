import React, { useState } from 'react'
import { useScroll } from "motion/react"



const Work = () => {
      const [images, setImages] = useState([
            {
                  url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  top: "50%",
                  left: "50%",
                  isActive: false,
            },
            {
                  url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  top: "56%",
                  left: "44%",
                  isActive: false
            },
            {
                  url: "https://images.unsplash.com/photo-1580894895938-bd31a62ed8ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  top: "44%",
                  left: "41%",
                  isActive: false
            },
            {
                  url: "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  top: "60%",
                  left: "47%",
                  isActive: false
            },
            {
                  url: "https://images.unsplash.com/photo-1581091224003-01e7c2e69f6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  top: "65%",
                  left: "38%",
                  isActive: false
            },
            {
                  url: "https://images.unsplash.com/photo-1581090581711-6c7643ef8c05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                  top: "43%",
                  left: "40%",
                  isActive: false
            },
      ])

      const { scrollYProgress } = useScroll();

      scrollYProgress.on("change", (data) => {
            function imageShow(arr) {
                  setImages((prev) => (
                        prev.map((item, index) => (
                              arr.indexOf(index) === -1
                                    ? ({ ...item, isActive: false })
                                    : { ...item, isActive: true }
                        ))
                  ));
            }

            switch (Math.floor(data * 100)) {
                  case 0:
                        imageShow([]);
                        break;
                  case 1:
                        imageShow([0]);
                        break;
                  case 2:
                        imageShow([0, 1]);
                        break;
                  case 3:
                        imageShow([0, 1, 2]);
                        break;
                  case 4:
                        imageShow([0, 1, 2, 3]);
                        break;
                  case 6:
                        imageShow([0, 1, 2, 3, 4]);
                        break;
                  case 8:
                        imageShow([0, 1, 2, 3, 4, 5]);
                        break;
            }
      });


      return (
            <div className='w-full p-3 text-white  mt-10'>
                  <div className="max-w-screen-xl mx-auto text-center relative">
                        <h1 className='leading-none text-[28rem] font-medium select-none'>work</h1>
                        <div className='absolute h-full w-full top-0'>
                              {images.map((elem, index) => {
                                    return <img src={elem.isActive ===true && (elem.url)} key={index} className="absolute w-60 rounded-lg" style={{ top: elem.top, left: elem.left }} alt="" />
                              })}
                        </div>
                  </div>
            </div>
      )
}

export default Work