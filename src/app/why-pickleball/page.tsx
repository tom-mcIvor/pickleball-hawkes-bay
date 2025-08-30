import React from 'react'

export default function WhyPickleball() {
  return (
    <main className="min-h-screen bg-white">
      {/* Why Choose Pickleball Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Pickleball?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why millions of people worldwide are falling in love with this amazing sport
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            <div className="text-center p-6 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏃‍♂️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy to Learn</h3>
              <p className="text-gray-600">Simple rules and smaller court make it accessible for beginners</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social & Fun</h3>
              <p className="text-gray-600">Meet new people and build lasting friendships through play</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Exercise</h3>
              <p className="text-gray-600">Low-impact workout that&apos;s great for staying fit and healthy</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All Ages</h3>
              <p className="text-gray-600">Perfect for players from 8 to 50+ years old</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill-Based Play</h3>
              <p className="text-gray-600">Play with people of your skill level for competitive and fun matches</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Formats</h3>
              <p className="text-gray-600">Enjoy singles, doubles, or skinny singles - variety for every preference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Start Your Pickleball Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you&apos;re a complete beginner or looking to improve your game, our welcoming community 
              in Hawke&apos;s Bay is here to help you discover the joy of pickleball. Join us for fun, fitness, 
              and friendship on the court!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/new-membership" 
                className="bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join Our Community
              </a>
              <a 
                href="/locations" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Find Courts Near You
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}