import React from 'react'
import Image from 'next/image'

export default function PhotosVideos() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Photos & Videos
          </h1>
          <p className="text-xl text-gray-700">
            Capturing the fun and excitement of pickleball in Hawke&apos;s Bay.
          </p>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Photo Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="overflow-hidden">
                <Image
                  src="/Pro-Conor-AtOurClub.png"
                  alt="Pro Conor at our club"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Pro Conor at Our Club</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}