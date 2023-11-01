'use client'
import React from 'react'
import locations from '../../../public/locations.png'
import Image from 'next/image'

function Locations() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={locations}
        width={500}
        height={500}
        alt='locations image'
      />
    </div>
  )
}

export default Locations