'use client'
import Image from 'next/image'
import React from 'react'
import CoachingImage from "../../../public/coaching.png"
import ShaneCoachingImage from "../../../public/ShaneCoaching.png"

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image 
        src={ShaneCoachingImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}

export default page