import React from 'react'
import Card from './Card'

const Cards = () => {
      return (
            <>
                  <div className='mt-20 max-w-screen-lg mx-auto flex gap-2'>
                        <Card head1={"Up Next: Culture"} head2={"Who we are"} boton={"Explore what drives our team."} width={"w-1/3"} />
                        <Card head1={"Get in Touch"} head2={"Let's get to it, together"} body={"Start a Project"} width={"w-2/3"} btn={true} hoverbg={"violet"}/>

                  </div>
            </>
      )
}

export default Cards