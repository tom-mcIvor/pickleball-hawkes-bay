'use client'
import React from 'react'
import locations from '../../../public/locations.png'
import Image from 'next/image'
import Head from 'next/head'

function Locations() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        {/* Include the Google Analytics script */}
        <script async src="/google-analytics.js"></script>
      </Head>
      <Image src={locations} width={500} height={500} alt="locations image" />
    </div>
  )
}

export default Locations
