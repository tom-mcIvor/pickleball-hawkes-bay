'use client'
import Image from 'next/image'
import React from 'react'
import pickleBallCourts from '../../public/pickleballCourts.png'
import garySwing from '../../public/GarySwing.png'
import { Carousel } from "@material-tailwind/react"

function Home() {
  return (
    <>

<div className="h-auto w-auto">
  <Carousel className="rounded-xl">
        <Image
          src={garySwing}      
          alt='garySwing'
        />
        <Image
          src={pickleBallCourts}     
          alt='pickleBallCourts'
        />
        <Image
          src={garySwing}       
          alt='garySwing'
        />
      </Carousel>
</div>
    </>
  )
}

export default Home