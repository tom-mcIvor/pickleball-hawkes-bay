'use client'
import Image from 'next/image'
import React from 'react'
import pickleBallCourts from '../../public/pickleballCourts.png'
import garySwing from '../../public/GarySwing.png'
import { Carousel } from '@material-tailwind/react'


function Home() {
  return (
    <>
      <div>
        <Carousel className="rounded-xl w-1/2 h-1/2">   
          <Image src={garySwing} alt="garySwing" />
          <Image src={pickleBallCourts} alt="pickleBallCourts" />
          <Image src={garySwing} alt="garySwing" />
        </Carousel>
      </div>
    </>
  )
}

export default Home
