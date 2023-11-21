'use client'
import Image from 'next/image'
import React from 'react'
import pickleBallCourts from '../../public/pickleballCourts.png'
import garySwing from '../../public/GarySwing.png'
import { Carousel } from '@material-tailwind/react'


function Home() {
  return (
    <>
      <div className="h-auto w-auto">
        <Carousel className="rounded-xl">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/885921215?h=cf1be2f785"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          <Image src={garySwing} alt="garySwing" />
          <Image src={pickleBallCourts} alt="pickleBallCourts" />
          <Image src={garySwing} alt="garySwing" />
        </Carousel>
      </div>
    </>
  )
}

export default Home
