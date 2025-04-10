"use client";
import { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css"; // Import OpenLayers CSS
import {
  RiInformationFill,
  RiBarChart2Fill,
  RiCircleFill,
  RiSquareFill,
  RiGridLine,
} from "@remixicon/react";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<Map | null>(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const links=[
    {value:"x",
      title:"Alerts",
      logo:<RiCircleFill size={20} />
    },
    {value:"x",
      title:"Events",
      logo:<RiSquareFill size={15} />
    },
    {value:<RiBarChart2Fill size={40} />,
      title:"Visualization",

    }
  ]
  const handleClick = (index: number | React.SetStateAction<null>) => {
    setActiveIndex(index);
    console.log("Clicked index:", index); // Add this to debug
  };

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = new Map({
        target: mapContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [85.324, 27.7172],
          zoom: 7,
          projection: "EPSG:4326",
        }),
      });
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {

        mapRef.current.setTarget(null);
        mapRef.current = null;
        
      }
    };
  }, []);


  return (
    <div className="flex ">
      <div className="bg-gray-100 shadow">
        <ul className="flex flex-row gap-10 h-11.5 justify-around bg-rose-500 w-160  items-center shadow-lg">
          <li className="bg-blue-500 font-bold text-xl  text-white h-11.5 flex justify-center items-center w-40">
            Bipad Portal
          </li>
          <li className=" font-bold text-xl  text-white h-11.5 flex justify-center items-center w-75">
            National
          </li>
        </ul>
        <div className="text-sm flex flex-col gap-3">
          <h1 className="text-sm flex gap-3">

            <RiInformationFill size={17} />
            Showing Data From <b>2025-04-02</b> to <b>2025-04-09</b>
          </h1>
          <h1 className="text-sm flex gap-3 mb-2">
            <RiInformationFill size={17} />
            Data Source<b>Realtime Module</b>
          </h1>
        </div>
        <div className="flex justify-between items-center bg-gray-200">
          <div className="flex justify-between items-center">
            {links.map((links,idx)=>(<button key={idx}className={`w-30 h-20 border-1 border-gray-300 flex flex-col justify-center items-center ${
                activeIndex === idx
                  ? "bg-rose-400 text-white"
                  : "bg-white text-gray-500"
              }`}>
              <h1 className="cursor-pointer text-rose-500 text-4xl">{links.value}</h1>
              <p className='flex items-center justify-center gap-5 font-bold text-sm'>

                {links.logo}
                {links.title}
              </p>
            </button>))}

            <button className='flex justify-end items-center ml-60 '>
              <RiGridLine color="gray" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={mapContainerRef}
        className="w-300 h-[1080] relative " // Adjusted classes for better visibility
      />
    </div>
  );
};

export default MapComponent;
