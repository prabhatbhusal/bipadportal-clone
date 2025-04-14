"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Added Next.js Link component for navigation
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  RiFeedbackFill,
  RiFileTextFill,
  RiInformationFill,
} from "@remixicon/react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const links = [
    { name: "DashBoard", url: "/dashboard", imgurl: "/home-2-fill.svg" },
    { name: "Incident", url: "/incident", imgurl: "/question-fill.svg" },
    {
      name: "Damage and Losses",
      url: "/damage&losses",
      imgurl: "/time-fill.svg",
    },
    { name: "Realtime", url: "/realtime", imgurl: "/signal-tower-fill.svg" },
    { name: "Profile", url: "/profile", imgurl: "/bar-chart-2-fill.svg" },
    { name: "Riskinfo", url: "/riskinfo", imgurl: "/asterisk.svg" },
    { name: "DataArchive", url: "/datarchive", imgurl: "/archive-fill.svg" },
    { name: "VisRisk", url: "/visriks", imgurl: "/eye-fill.svg" },
    { name: "IBF", url: "/ibf", imgurl: "/cloud-fill.svg" },
    { name: "Menu", url: "#", imgurl: "/more-2-fill.svg" },
    { name: "Login", url: "/login", imgurl: "/login-box-fill.svg" },
  ];

  const menulinks = [
    {
      title: "Feedback",
      tag: <RiFeedbackFill />,
      texttitle: "Welcome to BIPAD Portal",
      titlecontent: "BIPAD portal is a government owned integrated andcomprehensive Disaster Information Management System. It aims to bring together all credible digital and spatial data into a single platform to strengthen the preparedness, mitigation, and response activities of all related stakeholders working in this sector. This one stop platform has been developed with the concept of creating a national portal embedded with independent platforms for national, provincial, and municipal government with a bottom-up approach of disaster data partnership",
    },
    {
      title: "About Us",
      tag: <RiInformationFill />,
      texttitle: "BIPAD: Building Information Platform Against Disaster",
      titlecontent: "Disaster related data/information is one of the most crucial components for policy making, planning, and implementing DRRM activities.BIPAD is built at a time when disaster governance in Nepal is changing on account of federal restructuring of the country.However, disaster data/information is still scattered, insufficient and not fully harmonized.On this backdrop, BIPAD is developed by pooling all credible digital and spatial data that are available within different government bodies, non-governmental organizations, academic institutions and research organizations on a single platform.The platform has six modules in the portal that has the potential to:Enhance preparedness and early warninStrengthen disaster communicatioStrengthen emergency responsEnhance coordination post-incidenEvidence-based planning, decision making and policy makinThe focus of the system is on bottom up approach of data collection,targeting the Provincial and Municipal governments to engage in verifying and collecting data.BIPAD is targeted for Emergency Operation Centers at National, Provincial and Municipal tiers of the government, and Nepal Police, who is the first responder to disaster. Other users of this system are the line ministries at National and Provincial tiers working in disaster management division and departments, Nepal Army, Armed Police Force, non-governmental organizations, research institutions and the general publicThe features in BIPAD inform the users about the details of an incident for both natural and non-natural hazards for response and for historical analysis of loss and damage. The system integrates electronic version of the incident reporting form used in collecting incident information by Nepal PoliceThe alert feature has the potential to pre-inform to take early actions to mitigate disasters. BIPAD targets to provide crucial information on the capacity and resources, such as on health institutions, financial institutions, schools, banks, stockpiles, road network, inventories, NGOs, government agencies, etc. in relation to the incidents. The system incorporates hazard maps and vulnerability indicators that can be used for risk sensitive land use planning and DRR inclusive development activities. The system is built to accommodate repository of DRRM documents, status of DRRM projects, and relief budget tracking. It has provisions to monitor the government’s as well as non-government organizations’ projects on the basis of seven targets of Sendai Framework (2015-2030) and Priorities and Sub-Priorities of Disaster Risk Reduction Strategic Action plan 2018The above features of the system would be fully functional when credible data/information is integrated into the system coming from local level. The system is committed for the same.",
    },
    {
      title: "Situation Report",
      tag: <RiFileTextFill />,
      texttitle: "",
      titlecontent: "",
    },
    {
      title: "DRRM Report",
      tag: <RiFileTextFill />,
      texttitle: "",
      titlecontent: "",
    },
  ];
  const handleClick = (index: number) => {
    setActiveIndex(index);
    console.log("Clicked index:", index); // Debugging log
  };

  const [isvisible,setisvisible]=useState(false)






  return (
    <nav className="flex flex-col justify-center font-bold text-[9px]  overflow-x-hidden h-full bg-blue-800">
      <div className="">
        <div className=" flex flex-col justify-center items-center ml-460 text-gray-500 fixed z-1">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`w-20 h-25  flex flex-col justify-center items-center shadow-sm overflow-x-hidden cursor-pointer ${
                activeIndex === idx
                  ? "bg-rose-400 text-white"
                  : "bg-white text-gray-500"
              }`}
              onClick={() => handleClick(idx)}
            >
              <Link
                href={link.url}
                className="flex flex-col items-center justify-center"
              >
                <span>
                  <Image
                    src={link.imgurl}
                    alt={link.name}
                    height={20}
                    width={20}
                    className={`hover:fill-rose-400 ${
                      activeIndex === idx ? "filter invert" : ""
                    }`} // Better for SVG color change
                  />
                </span>
                <span
                  className={
                    activeIndex === idx
                      ? "text-white"
                      : "text-gray-500 hover  hover:text-rose-400"
                  }
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
          <div className={`h-50 w-60 absolute z-100 border-1 border-gray-200 mt-202 mr-85 bg-red-800  ${isvisible ? "grid" :"hidden"} grid-cols-3`}>
              <button
                className="flex flex-col items-center justify-center hover:text-rose-400 cursor-pointer"
                onClick={()=>setisvisible(isvisible)}
              >
                button

              </button>
            {menulinks.map((links, idx) =>               <Dialog key={idx}>
              <span><DialogTrigger>{links.title}</DialogTrigger></span>
            <DialogContent>
              <DialogHeader>
                <div className="flex gap-3 ">
                  <div>
                    <DialogTitle>{links.texttitle}</DialogTitle>
                    <DialogDescription>
                      {links.titlecontent}
                    </DialogDescription>

                    <DialogDescription>

                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
