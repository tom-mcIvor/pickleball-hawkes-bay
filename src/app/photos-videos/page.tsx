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
            Capturing the fun and excitement of pickleball in Hawke's Bay.
          </p>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/moneyball.png"
                alt="Moneyball"
                width={600}
                height={400}
                className="w-full h-[400px] object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/Pro-Conor-AtOurClub.png"
                alt="Pro Conor at our club"
                width={600}
                height={400}
                className="w-full h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}