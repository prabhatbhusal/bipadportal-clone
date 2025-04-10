"use client"; // Indicates this is a client-side rendered component
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
  const mapContainerRef = useRef(null); // Reference to the map container DOM element
  const mapRef = useRef<Map | null>(null); // Reference to the OpenLayers map instance
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active button index

  // Array of links with their respective values, titles, and icons
  const links = [
    { value: "x", title: "Alerts", logo: <RiCircleFill size={20} /> },
    { value: "x", title: "Events", logo: <RiSquareFill size={15} /> },
    { value: <RiBarChart2Fill size={40} />, title: "Visualization" },
  ];

  // Function to handle button click and update the active index
  const handleClick = (index: number | React.SetStateAction<null>) => {
    setActiveIndex(index);
    console.log("Clicked index:", index); // Debugging log
  };

  useEffect(() => {
    // Initialize the OpenLayers map when the component mounts
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = new Map({
        target: mapContainerRef.current, // Target the map container
        layers: [
          new TileLayer({
            source: new OSM(), // Use OpenStreetMap as the tile source
          }),
        ],
        view: new View({
          center: [85.324, 27.7172], // Set the map's center (longitude, latitude)
          zoom: 7, // Set the initial zoom level
          projection: "EPSG:4326", // Use WGS84 projection
        }),
      });
    }

    // Cleanup function to destroy the map instance when the component unmounts
    return () => {
      if (mapRef.current) {
        mapRef.current.setTarget(null); // Detach the map from the DOM
        mapRef.current = null; // Clear the map reference
      }
    };
  }, []);

  return (
    <div className="flex ">
      {/* Sidebar section */}
      <div className="bg-gray-100 shadow">
        {/* Header with navigation links */}
        <ul className="flex flex-row gap-10 h-11.5 justify-around bg-rose-500 w-160 items-center shadow-lg">
          <li className="bg-blue-500 font-bold text-xl text-white h-11.5 flex justify-center items-center w-40">
            Bipad Portal
          </li>
          <li className="font-bold text-xl text-white h-11.5 flex justify-center items-center w-75">
            National
          </li>
        </ul>

        {/* Information section */}
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

        {/* Buttons section */}
        <div className="flex justify-between items-center bg-gray-200">
          <div className="flex justify-between items-center">
            {links.map((links, idx) => (
              <button
                key={idx} // Unique key for each button
                onClick={() => handleClick(idx)} // Handle button click
                className={`w-30 h-20 border-gray-300 bg-gray-200 flex flex-col justify-center items-center ${
                  activeIndex === idx
                    ? "bg-white text-gray-500" // Active button styles
                    : "bg-gray-200 text-gray-500" // Inactive button styles
                }`}
              >
                <h1 className="cursor-pointer text-rose-500 text-4xl">
                  {links.value} {/* Display the button value */}
                </h1>
                <p className="flex items-center justify-center gap-5 font-bold text-sm">
                  {links.logo} {/* Display the button icon */}
                  {links.title} {/* Display the button title */}
                </p>
              </button>
            ))}
            {/* Additional button */}
            <button className="flex justify-end items-center ml-60 ">
              <RiGridLine color="gray" />
            </button>
            <div id="dataavailable" className="bg-white"></div>{" "}
            {/* Placeholder for additional content */}
          </div>
        </div>
      </div>

      {/* Map container */}
      <div
        ref={mapContainerRef} // Reference to the map container
        className="w-300 h-[1080] relative " // Adjusted classes for better visibility
      />
    </div>
  );
};

export default MapComponent; // Export the component
