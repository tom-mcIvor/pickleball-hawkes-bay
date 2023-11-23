'use client'
import Image from 'next/image'
import React from 'react'
import CoachingImage from "../../../public/coaching.png"
import ShaneCoachingImage from "../../../public/ShaneCoaching.png"
import Head from 'next/head'

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
       <Head>
        {/* Include the Google Analytics script */}
        <script async src="/google-analytics.js"></script>
      </Head>
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