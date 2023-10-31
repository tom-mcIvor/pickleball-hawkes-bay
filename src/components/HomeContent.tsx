'use client'
import Image from 'next/image'
import React from 'react'
import pickleBallCourts from '../../public/pickleballCourts.png'

function Home() {
  return (
    <>
      <Image
        src={pickleBallCourts}
        width={500}
        height={500}
        alt='pickleBallCourts'
      />
    </>
  )
}

export default Home