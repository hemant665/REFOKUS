import React from 'react'
import Card from './Card'

const Cards = () => {
      return (
            <>
                  <div className='w-full'>
                        <div className='mt-20 max-w-screen-xl mx-auto flex gap-5'>
                              <Card head1={"Up Next: Culture"} head2={"Who we are"} botom={"Explore what drives our team."} width={"20%"}/>
                              <Card head1={"Get in Touch"} head2={"Let's get to it, together"} body={"Start a Project"} width={"80%"} botom={""}/>
                        </div>
                  </div>
            </>
      )
}

export default Cards