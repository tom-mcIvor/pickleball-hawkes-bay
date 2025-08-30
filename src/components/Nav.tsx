'use client'
import React from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link"
 
export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [openTournamentsDropdown, setOpenTournamentsDropdown] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const navItems = [
    { name: "Locations", href: "/locations" },
    { name: "Photos & Videos", href: "/photos-videos" },
    { name: "Coaching", href: "/coaching" },
  ];

  const tournamentItems = [
    { name: "Why Pickleball", href: "/why-pickleball" },
    { name: "External Tournaments", href: "https://www.pnza.org.nz/tournaments/", external: true },
  ];

  const eventItems = [
    { name: "The League", href: "/events/the-league" },
    { name: "Local Tournaments", href: "/events/local-tournaments" },
    { name: "Casual Play", href: "/events/casual-play" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-100 shadow-lg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl lg:text-3xl font-bold">
              <span className="text-yellow-600">Pickle</span>
              <span className="text-green-600">Ball</span>
              <span className="text-blue-600 ml-2">HawkesBay</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 font-semibold hover:text-yellow-600 px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 font-semibold hover:text-yellow-600 px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Tournaments Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 font-semibold hover:text-yellow-600 px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-200 flex items-center">
                Tournaments
                <ChevronDownIcon className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {tournamentItems.map((item) => (
                  <div key={item.name}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 font-medium hover:text-yellow-600 hover:bg-yellow-50 transition-colors rounded-lg mx-2"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 font-medium hover:text-yellow-600 hover:bg-yellow-50 transition-colors rounded-lg mx-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Events Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 font-semibold hover:text-yellow-600 px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-200 flex items-center">
                Events
                <ChevronDownIcon className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {eventItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 font-medium hover:text-yellow-600 hover:bg-yellow-50 transition-colors rounded-lg mx-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/new-membership"
              className="bg-gradient-to-r from-yellow-500 to-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:from-yellow-600 hover:to-green-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Buy Membership
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpenNav(!openNav)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {openNav && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700 font-semibold hover:text-yellow-600 px-4 py-3 rounded-lg hover:bg-yellow-50 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 font-semibold hover:text-yellow-600 px-4 py-3 rounded-lg hover:bg-yellow-50 transition-colors"
                      onClick={() => setOpenNav(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Tournaments Section */}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase tracking-wide">Tournaments</div>
                {tournamentItems.map((item) => (
                  <div key={item.name}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 font-medium hover:text-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-50 transition-colors"
                        onClick={() => setOpenNav(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-700 font-medium hover:text-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-50 transition-colors"
                        onClick={() => setOpenNav(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Events Section */}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase tracking-wide">Events</div>
                {eventItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 font-medium hover:text-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-50 transition-colors"
                    onClick={() => setOpenNav(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                href="/new-membership"
                className="mx-4 mt-4 bg-gradient-to-r from-yellow-500 to-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg text-center hover:from-yellow-600 hover:to-green-700 transition-all duration-300"
                onClick={() => setOpenNav(false)}
              >
                Buy Membership
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav