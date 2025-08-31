'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import pickleBallCourts from '../../public/pickleballCourts.png'
import garySwing from '../../public/GarySwing.png'
import locations from '../../public/locations.png'
import pickleballIcon from '../../public/pickleball.png'
import johnSwinging from '../../public/tom-swinging.png'
import johnLunging from '../../public/tom-unging-for-the-ball.png'
import { Carousel } from '@material-tailwind/react'
import Footer from './Footer'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-8 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100"></div>
        </div>


        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left relative">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight relative">
                Welcome to
                <span className="block text-yellow-600">PickleBall</span>
                <span className="block text-green-600">HawkesBay</span>
                
                {/* Bouncing Pickleball Icons positioned to the right of title */}
                <div className="absolute top-0 -right-16 lg:-right-24 pointer-events-none hidden lg:block">
                  <Image 
                    src={pickleballIcon} 
                    width={60} 
                    height={60} 
                    alt="Pickleball" 
                    className="animate-bounce"
                    style={{ animationDelay: '0s', animationDuration: '3s' }}
                  />
                </div>
                <div className="absolute top-20 -right-8 lg:-right-12 pointer-events-none hidden lg:block">
                  <Image 
                    src={pickleballIcon} 
                    width={40} 
                    height={40} 
                    alt="Pickleball" 
                    className="animate-bounce"
                    style={{ animationDelay: '1s', animationDuration: '4s' }}
                  />
                </div>
                <div className="absolute top-40 -right-20 lg:-right-28 pointer-events-none hidden lg:block">
                  <Image 
                    src={pickleballIcon} 
                    width={50} 
                    height={50} 
                    alt="Pickleball" 
                    className="animate-bounce"
                    style={{ animationDelay: '2s', animationDuration: '3.5s' }}
                  />
                </div>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                Discover the fastest-growing sport in New Zealand! Join our vibrant community 
                of players in the beautiful Hawke&apos;s Bay region.
              </p>

              {/* What is Pickleball Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Pickleball?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pickleball combines elements of tennis, badminton, and ping-pong. Played on a smaller court 
                  with a lower net, it&apos;s easy to learn but challenging to master. Perfect for all ages and 
                  fitness levels, it&apos;s the ideal sport for staying active and having fun!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/new-membership" 
                  className="bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Our Community
                </Link>
                <Link 
                  href="/locations" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Find Courts Near You
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">200+</div>
                  <div className="text-sm text-gray-600">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10+</div>
                  <div className="text-sm text-gray-600">Court Locations Across Hawke&apos;s Bay With Indoor Courts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Pickleball Games Played Each Week</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative">
              <div className="relative z-10 group hover:scale-105 transition-transform duration-500 ease-in-out">
                <Carousel 
                  className="rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300"
                  autoplay={true}
                  loop={true}
                  navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
                >   
                  <div className="relative h-96 lg:h-[500px] overflow-hidden">
                    <Image 
                      src={garySwing} 
                      alt="Player demonstrating pickleball swing technique" 
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold">Perfect Your Technique</h3>
                      <p className="text-sm opacity-90">Professional coaching available</p>
                    </div>
                  </div>
                  
                  <div className="relative h-96 lg:h-[500px] overflow-hidden">
                    <Image 
                      src={pickleBallCourts} 
                      alt="Modern pickleball courts in Hawke&apos;s Bay" 
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold">Premium Facilities</h3>
                      <p className="text-sm opacity-90">State-of-the-art courts across Hawke&apos;s Bay</p>
                    </div>
                  </div>
                </Carousel>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

      </section>


      {/* Photos & Videos Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 lg:px-8">

          {/* Two Carousels Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* First Carousel */}
            <div className="group hover:scale-105 transition-transform duration-500 ease-in-out">
            <Carousel
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              navigation={({setActiveIndex, activeIndex, length}) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
              prevArrow={({handlePrev}) => (
                <button
                  onClick={handlePrev}
                  className="absolute top-2/4 left-4 z-40 -translate-y-2/4 rounded-full bg-white/80 hover:bg-white p-3 text-gray-800 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
              )}
              nextArrow={({handleNext}) => (
                <button
                  onClick={handleNext}
                  className="absolute top-2/4 right-4 z-40 -translate-y-2/4 rounded-full bg-white/80 hover:bg-white p-3 text-gray-800 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              )}
            >
              {/* Photo Slide 1 */}
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image 
                  src={garySwing} 
                  width={800} 
                  height={500} 
                  alt="Gary playing pickleball in action" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">In Action</h3>
                  <p className="text-white/90">Watch our skilled players demonstrate perfect form and technique</p>
                </div>
              </div>

              {/* Photo Slide 2 */}
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image 
                  src={pickleBallCourts} 
                  width={800} 
                  height={500} 
                  alt="Modern pickleball courts in Hawke's Bay" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Beautiful Courts</h3>
                  <p className="text-white/90">State-of-the-art facilities perfect for players of all skill levels</p>
                </div>
              </div>


              {/* Photo Slide 4 - John Swinging */}
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image 
                  src={johnSwinging} 
                  width={800} 
                  height={500} 
                  alt="swinging in pickleball action" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Perfect Swing</h3>
                  <p className="text-white/90">Dynamic action shot showcasing powerful pickleball technique</p>
                </div>
              </div>

              {/* Photo Slide 5 - John Lunging */}
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image 
                  src={johnLunging} 
                  width={800} 
                  height={500} 
                  alt="John lunging for the pickleball" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Athletic Reach</h3>
                  <p className="text-white/90">Incredible athleticism and dedication to every point</p>
                </div>
              </div>


            </Carousel>
            </div>

            {/* Second Carousel */}
            <div className="group hover:scale-105 transition-transform duration-500 ease-in-out">
            <Carousel
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              navigation={({setActiveIndex, activeIndex, length}) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
              prevArrow={({handlePrev}) => (
                <button
                  onClick={handlePrev}
                  className="absolute top-2/4 left-4 z-40 -translate-y-2/4 rounded-full bg-white/80 hover:bg-white p-3 text-gray-800 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
              )}
              nextArrow={({handleNext}) => (
                <button
                  onClick={handleNext}
                  className="absolute top-2/4 right-4 z-40 -translate-y-2/4 rounded-full bg-white/80 hover:bg-white p-3 text-gray-800 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              )}
            >
              {/* Alternative Action Shots */}
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image 
                  src={pickleBallCourts} 
                  width={600} 
                  height={400} 
                  alt="Pickleball courts overview" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Court Overview</h3>
                  <p className="text-white/90">Professional facilities designed for optimal play</p>
                </div>
              </div>

              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image 
                  src={garySwing} 
                  width={600} 
                  height={400} 
                  alt="Player demonstrating technique" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Technique Focus</h3>
                  <p className="text-white/90">Learn proper form and improve your skills</p>
                </div>
              </div>

              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <Image 
                  src={johnSwinging} 
                  width={600} 
                  height={400} 
                  alt="Dynamic pickleball action" 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Power Play</h3>
                  <p className="text-white/90">Experience the excitement of competitive pickleball</p>
                </div>
              </div>

            </Carousel>
            </div>

          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Home
