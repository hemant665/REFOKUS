import React, { useRef, useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'
import video1 from '../assets/video1.webm'
import video2 from '../assets/video2.webm'
import video3 from '../assets/video3.webm'


const Products = () => {

  const data = [
    { name: 'Cula', url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A).webp', description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", bgColor: "bg-neutral-800", live: true, case: true, isActive: false },
    { name: 'Arqitel', url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A).webp', description: "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.", bgColor: "bg-blue-700", live: true, case: false, isActive: false },
    { name: 'BCG Platinion', url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A).webp', description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", bgColor: "bg-gray-700", live: true, case: true, isActive: false },
  ]

  const [pos, setPos] = useState(0);
  
  const mover = (val) => {
    setPos(val * 20)
  }
  
  const videoRef = useRef(null);

  const HandleMouseEnter = () => {
    if(videoRef.current){
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }
  const HandleMouseLeave = () => {
    if(videoRef.current){
      videoRef.current.pause();
    }
  }

  return (
    <div className='w-full px-4  mt-20 flex flex-col relative'>
      {data.map((elem, index) => <Product key={index} value={elem} index={index} mover={mover} className="bg-neutral-400" />)}
      <div className='w-full h-full top-0  absolute pointer-events-none' >
        <motion.div
          className='window absolute w-[30%] h-[20rem] overflow-hidden  '
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          style={{ left: "25%" }}>
          <motion.div animate={{ y: -pos + `rem` }} className='w-full h-full'>
            <video 
              src={video1} 
              autoPlay  
              muted 
              onMouseEnter={HandleMouseEnter}
              onMouseLeave={HandleMouseLeave}
              style={{width: "100%" , height: "100%"}} 
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} className='w-full h-full'>
          <video 
            src={video2} 
            autoPlay 
            loop 
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeave}
            muted 
            style={{width: "100%" , height: "100%"}} 
          />
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} className='w-full h-full'>
          <video 
            src={video3} 
            autoPlay 
            loop 
            muted 
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeave}
            style={{width: "100%" , height: "100%"}} 
          />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products