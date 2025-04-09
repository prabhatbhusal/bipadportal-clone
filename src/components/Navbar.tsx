import React from "react";
import Image from "next/image";


const Navbar = () => {
  const links = [
    {
      name: "DashBoard",
      url: "/dashboard",
      imgurl:"/home-2-fill.svg"
    },
    {
      name: "Incident",
      url: "/incident",
      imgurl:"/question-fill.svg"
    },
    {
      name: "Damage & Losses",
      url: "/damage&losses",
      imgurl:"/time-fill.svg"
    },
    {
      name: "Realtime",
      url: "/realtime",
      imgurl:"/signal-tower-fill.svg"
    },
    {
      name: "Profile",
      url: "/profile",
      imgurl:"/bar-chart-2-fill.svg"
    },
    {
      name: "Riskinfo",
      url: "/riskinfo",
      imgurl:"/asterisk.svg"
    },
    {
      name: "Dataarchive",
      url: "/datarchive",
      imgurl:"/archive-fill.svg"
    },
    {
      name: "VisRisk",
      url: "/visriks",
      imgurl:"/eye-fill.svg"
    },
    {
      name: "IBF",
      url: "/ibf",
      imgurl:"/cloud-fill.svg"
    },
    {
      name: "Menu",
      url: "/button",
      imgurl:"/more-2-fill.svg"
    },
    {
      name: "Login",
      url: "/login",
      imgurl:"/login-box-fill.svg"
    },
  ];
  return <div className='flex flex-col justify-center font-semibold text-xs overflow-x-hidden'>

      <div className='h-210  flex flex-col  justify-center ml-350 text-gray-500'>
      {
      links.map((link,idx)=>(<li key={idx} className='w-35    flex-col h-19 flex justify-center  items-center shadow-sm bg-white  text-gray-500 overflow-x-hidden'>
        <span><Image src={link.imgurl} alt="image" height={20} width={20}color="gray" className='text-gray-500'/></span>
        <a href={link.url}>{link.name}</a></li>))
      }
      </div>
      


  </div>;
};

export default Navbar;
