'use client'
import React from 'react'
import locations from '../../../public/locations.png'
import Image from 'next/image'
import Script from 'next/script'

function Locations() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4CYW9JNJ5Y" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </div>
      <Image src={locations} width={500} height={500} alt="locations image" />
    </div>
  )
}

export default Locations
