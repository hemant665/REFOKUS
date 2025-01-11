import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {

  const data = [
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg", number: "25"},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg", number: "12"},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg", number: "32"},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg", number: "91"},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg", number: "41"},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg", number: "78"},
  ]


  return (
    <div className='flex w-full mt-20'>

      {data.map((elem,index)=> <Stripe elem={elem} key={index}/>)}
     
    </div>
  )
}

export default Stripes