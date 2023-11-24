'use client'
import { Typography } from "@material-tailwind/react";
 
function Footer() {
  return (
    <footer className="px-4 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Pickleball HawkesBay
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="hittingPartners"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Hitting Partners
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="contact"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default Footer