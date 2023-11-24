'use client'
import React from 'react'
import Script from 'next/script'

type Props = {}

export default function page({}: Props) {
  return (
<div className='flex min-h-screen flex-col items-center justify-center p-24'>
<div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4CYW9JNJ5Y" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4CYW9JNJ5Y');
        `}
      </Script>
    </div>
  <ul className="grid grid-cols-2 gap-2 text-left">
    <li><span className="font-bold">Location:</span></li>
    <li>707 Sylvan Rd Hastings</li>
    <li><span className="font-bold">Email:</span></li>
    <li>pickleballhb@gmail.com</li>
    <li><span className="font-bold">or</span></li>
    <li><a href="https://www.facebook.com/ange.brady12" className='text-blue-500'>Contact Ange on Facebook</a></li>
  </ul>
</div>
  )
}



