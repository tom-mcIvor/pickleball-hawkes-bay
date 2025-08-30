'use client'
import React from 'react'
import locations from '../../../public/locations.png'
import Image from 'next/image'
import Script from 'next/script'
import { Card, CardBody, Typography } from '@material-tailwind/react'

function Locations() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4CYW9JNJ5Y" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4CYW9JNJ5Y');
        `}
      </Script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Court <span className="text-green-600">Locations</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find pickleball courts near you across the beautiful Hawke&apos;s Bay region. 
              Multiple venues available for players of all skill levels.
            </p>
          </div>

          {/* Main Locations Image */}
          <div className="flex justify-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl">
              <Image 
                src={locations} 
                width={800} 
                height={600} 
                alt="Pickleball court locations across Hawke's Bay" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Court Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Available Venues
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have courts available throughout Hawke&apos;s Bay with regular sessions and leagues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sylvan Road */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏟️</span>
                  </div>
                  <div>
                    <Typography variant="h5" color="blue-gray" className="font-bold">
                      Sylvan Road
                    </Typography>
                    <Typography color="gray" className="text-sm">
                      Primary Venue
                    </Typography>
                  </div>
                </div>
                <Typography color="gray" className="mb-4">
                  Our main venue with multiple courts and regular sessions throughout the week.
                </Typography>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Wednesday:</span>
                    <span>From 3:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Friday:</span>
                    <span>League games from 5:30pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span>1pm to 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span>9am - Noon</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* RGA Courts */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎾</span>
                  </div>
                  <div>
                    <Typography variant="h5" color="blue-gray" className="font-bold">
                      RGA Courts
                    </Typography>
                    <Typography color="gray" className="text-sm">
                      New Stadium
                    </Typography>
                  </div>
                </div>
                <Typography color="gray" className="mb-4">
                  Double courts available at the New Stadium for expanded play opportunities.
                </Typography>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Thursday:</span>
                    <span>9:30am - 12pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Location:</span>
                    <span>Taradale</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Meannee Badminton Hall */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏸</span>
                  </div>
                  <div>
                    <Typography variant="h5" color="blue-gray" className="font-bold">
                      Meannee Hall
                    </Typography>
                    <Typography color="gray" className="text-sm">
                      Badminton Hall
                    </Typography>
                  </div>
                </div>
                <Typography color="gray" className="mb-4">
                  Indoor facility perfect for year-round play regardless of weather conditions.
                </Typography>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span>9am - Noon</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Address:</span>
                    <span>Gavin Black St</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Weekly Schedule
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Join us for regular sessions throughout the week
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6 max-w-3xl mx-auto shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <span className="text-3xl mr-3">🌦️</span>
                <Typography variant="h5" className="text-blue-800 font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Weather Check Required
                </Typography>
                <span className="text-3xl ml-3">🏓</span>
              </div>
              <Typography className="text-blue-700 text-center font-medium text-lg">
                All outdoor session times are weather permitting and may be subject to change. Check our Facebook page for real-time updates before heading out to play!
              </Typography>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardBody className="p-8">
              <div className="grid gap-6">
                {/* Monday */}
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">MON</span>
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray" className="font-bold">
                        Sylvan Road
                      </Typography>
                      <Typography color="gray">
                        From 3:00pm
                      </Typography>
                    </div>
                  </div>
                  <div className="text-right">
                    <Typography className="font-semibold text-blue-600">
                      $2/session or $5/week
                    </Typography>
                  </div>
                </div>

                {/* Wednesday */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">WED</span>
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray" className="font-bold">
                        Sylvan Road
                      </Typography>
                      <Typography color="gray">
                        From 3:00pm - Weather permitting
                      </Typography>
                    </div>
                  </div>
                  <div className="text-right">
                    <Typography className="font-semibold text-green-600">
                      $2/session or $5/week
                    </Typography>
                  </div>
                </div>

                {/* Thursday */}
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">THU</span>
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray" className="font-bold">
                        RGA Double Courts
                      </Typography>
                      <Typography color="gray">
                        9:30am - 12pm at New Stadium, Taradale
                      </Typography>
                    </div>
                  </div>
                  <div className="text-right">
                    <Typography className="font-semibold text-blue-600">
                      $5 per session
                    </Typography>
                  </div>
                </div>

                {/* Friday */}
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">FRI</span>
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray" className="font-bold">
                        Sylvan Road
                      </Typography>
                      <Typography color="gray">
                        From 3:00pm
                      </Typography>
                    </div>
                  </div>
                  <div className="text-right">
                    <Typography className="font-semibold text-orange-600">
                      $2/session or $5/week
                    </Typography>
                  </div>
                </div>

                {/* Saturday */}
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">SAT</span>
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray" className="font-bold">
                        Weekend Play
                      </Typography>
                      <Typography color="gray">
                        Sylvan Road - 1pm to 6pm
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Sunday */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">SUN</span>
                    </div>
                    <div>
                      <Typography variant="h6" color="blue-gray" className="font-bold">
                        Multiple Venues
                      </Typography>
                      <Typography color="gray">
                        Sylvan Road (9am-Noon) & Meannee Hall (9am-Noon)
                      </Typography>
                    </div>
                  </div>
                  <div className="text-right">
                    <Typography className="font-semibold text-green-600">
                      $5 per session
                    </Typography>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Play?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us at any of our venues! Check our Facebook page for the latest updates 
              on weather conditions and session availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/new-membership" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join Our Community
              </a>
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Locations
