'use client' 
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link"
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="locations" className="flex items-center hover:text-blue-500 transition-colors">
          Locations
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="https://www.pnza.org.nz/tournaments/" target="_blank" className="flex items-center hover:text-blue-500 transition-colors">
          Tournaments
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="coaching" className="flex items-center hover:text-blue-500 transition-colors">
          Coaching
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/new-membership" className="flex items-center hover:text-blue-500 transition-colors">
          Buy Membership
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium relative group"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Events
        </a>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-2">
          <li><a href="/events/the-league" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">The League</a></li>
          <li><a href="/events/local-tournaments" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Local Tournaments</a></li>
          <li><a href="/events/casual-play" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Casual Play</a></li>
        </ul>
      </Typography>
    </ul>
  );
}
 
export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
    <div className="flex items-center justify-between text-blue-gray-900">
      <Typography
        as="a"
        href="#"
        variant="h6"
        className="mr-4 cursor-pointer py-1.5 hover:text-blue-500"
      >
        <Link href="#">PickleBall HawkesBay</Link>
      </Typography>
      <div className="hidden lg:block">
        <NavList />
      </div>
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
          <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </IconButton>
    </div>
    <Collapse open={openNav}>
      <NavList />
    </Collapse>
    </Navbar> 
  )
}

export default Nav