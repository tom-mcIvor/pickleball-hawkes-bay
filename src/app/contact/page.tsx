'use client'
import Head from 'next/head'
import React from 'react'
type Props = {}

export default function page({}: Props) {
  return (
<div className='flex min-h-screen flex-col items-center justify-center p-24'>
<Head>
        {/* Include the Google Analytics script */}
        <script async src="/google-analytics.js"></script>
      </Head>
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

