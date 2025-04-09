import React from "react";
const links = [
  {
    name: "DashBoard",
    url: "/dashboard",
    icon:"",
  },
  {
    name: "Incident",
    url: "/incident",
  },
  {
    name: "Damage & Losses",
    url: "/damage&losses",
  },
  {
    name: "Realtime",
    url: "/realtime",
  },
  {
    name: "Profile",
    url: "/profile",
  },
  {
    name: "Riskinfo",
    url: "/riskinfo",
  },
  {
    name: "Dataarchive",
    url: "/datarchive",
  },
  {
    name: "VisRisk",
    url: "/visriks",
  },
  {
    name: "IBF",
    url: "/ibf",
  },
  {
    name: "Button",
    url: "/button",
  },
  {
    name: "Login",
    url: "/login",
  },
];
const Navbar = () => {
  return <div className='flex flex-col justify-center'>
    <ul className='flex flex-col justify-center items-end '>{
      links.map((link,idx)=>(<li key={idx} className='w-20 border-1 h-15 flex-col flex overflow-x-hidden'>
        <span>Hello</span>
        <a href={link.url}>{link.name}</a></li>))

      }

    </ul>
  </div>;
};

export default Navbar;
