'use client'
import Image from 'next/image'
import React from 'react'
import ShaneCoachingImage from "../../../public/ShaneCoaching.png"
import Script from 'next/script'

function page() {
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