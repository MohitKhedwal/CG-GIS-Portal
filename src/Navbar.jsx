import React from 'react';
import { MdContactPhone } from "react-icons/md"; 
import { IoLocationSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { PiNotePencilFill } from "react-icons/pi";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="p-4 min-h-4 m-3 flex justify-between items-center h-16 px-4 text-sm font-semibold">
      <a href='#'> 
        <div className="flex items-center">
        <div className="h-16 w-16 mr-2 bg-cover bg-no-repeat bg-center logo" alt="CG-Govt-Logo" />
          <div className="flex flex-col space-y-1">
            <span className="text-base font-semibold mb-0 text-red-900 font-sans">Geo Portal Chhattisgarh</span>
            <span className="italic mt-0 text-sm mt-0 text-gray-500 font-sans">Chhattishgarh Geo Spatial Gateway</span>
          </div>
        </div>
        </a>
      <ul className="font-sans font-semibold flex space-x-4">
        <li>
          <a href="#" className="flex items-center hover:text-red-900">
            <AiFillHome className="mr-2 text-lg" />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-red-900">
            <IoIosInformationCircle className="mr-2 text-lg" />
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-red-900">
            <PiNotePencilFill  className="mr-2 text-lg" />
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-red-900">
            <FaDatabase className="mr-2 text-lg" />
            Data
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-red-900">
            <IoLocationSharp className="mr-2 text-lg" />
            CG GIS
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-red-900">
            <IoLocationSharp className="mr-2 text-lg" />
            District GIS
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-red-900">
            <MdContactPhone className="mr-2 text-lg" />
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
