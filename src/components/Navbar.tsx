'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Added Next.js Link component for navigation
import Menubar from './Menubar'
import { RiFeedbackFill } from "@remixicon/react";
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const links = [
    { name: "DashBoard", url: "/dashboard", imgurl: "/home-2-fill.svg" },
    { name: "Incident", url: "/incident", imgurl: "/question-fill.svg" },
    { name: "Damage and Losses", url: "/damage&losses", imgurl: "/time-fill.svg" },
    { name: "Realtime", url: "/realtime", imgurl: "/signal-tower-fill.svg" },
    { name: "Profile", url: "/profile", imgurl: "/bar-chart-2-fill.svg" },
    { name: "Riskinfo", url: "/riskinfo", imgurl: "/asterisk.svg" },
    { name: "DataArchive", url: "/datarchive", imgurl: "/archive-fill.svg" },
    { name: "VisRisk", url: "/visriks", imgurl: "/eye-fill.svg" },
    { name: "IBF", url: "/ibf", imgurl: "/cloud-fill.svg" },
    { name: "Menu", url: "/button", imgurl: "/more-2-fill.svg" },
    { name: "Login", url: "/login", imgurl: "/login-box-fill.svg" },
  ];

   const menulinks=[{
    name:"Feedback",
    tag:<RiFeedbackFill/>,


   }]
  const handleClick = (index) => {
    setActiveIndex(index);
    console.log('Clicked index:', index); // Add this to debug
  };


  return (
    <nav className='flex flex-col justify-center font-semibold text-[10px] overflow-x-hidden h-full bg-blue-800'>
      <div className=''>
      <div className=' flex flex-col justify-center items-center ml-460 text-gray-500 fixed z-1'>
        {links.map((link, idx) => (
          <li
            key={idx}
            className={`w-20 h-25  flex flex-col justify-center items-center shadow-sm overflow-x-hidden cursor-pointer ${
              activeIndex === idx
                ? 'bg-rose-400 text-white'
                : 'bg-white text-gray-500'
            }`}
            onClick={() => handleClick(idx)}
          >
            <Link href={link.url} className="flex flex-col items-center justify-center">
              <span>
                <Image
                  src={link.imgurl}
                  alt={link.name}
                  height={20}
                  width={20}
                  className={`hover:fill-rose-400 ${activeIndex === idx ? 'filter invert' : ''}`} // Better for SVG color change
                />
              </span>
              <span className={activeIndex === idx ? 'text-white' : 'text-gray-500 hover  hover:text-rose-400'}>
                {link.name}
              </span>
            </Link>
          </li>
        ))}
         <div className='h-50 w-60 absolute z-100 border-1 border-gray-200 mt-202 mr-85 bg-white grid  grid-cols-3'>
          <button popovertarget='feed'className='flex flex-col items-center justify-center'>
            <RiFeedbackFill/>
          <span id='feed' popover='auto'>Feedback</span>
          </button>
          <div className='flex items-center justify-center'><RiFeedbackFill/>
          <h1>Feedback</h1></div>
          <div className='flex items-center justify-center'><RiFeedbackFill/>
          <h1 className='flex items-center justify-center'>Feedback</h1></div>
          <div><RiFeedbackFill/>
          <h1 className='flex items-center justify-center'>Feedback</h1></div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;