"use client";
import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css"; // Import OpenLayers CSS

const MapComponent = () => {
  const mapContainerRef = useRef(null); // Ref for the DOM element
  const mapRef = useRef<Map | null>(null); // Ref for the Map instance

  useEffect(() => {
    // Only create map if it doesn't exist
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = new Map({
        target: mapContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [85.324, 27.7172], // These should be in EPSG:4326 (lon, lat)
          zoom: 7,
          projection: "EPSG:4326", // Specify projection explicitly
        }),
      });
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.setTarget(null); // Properly dispose of the map
        mapRef.current = null;
      }
    };
  }, []); // Empty dependency array since we only want this to run once

  return (
    <div className="flex ">
      <div className="bg-gray-100">
        <ul className="flex flex-row gap-10 h-13 justify-around bg-rose-400 w-135 items-center shadow-lg">
          <li className="bg-blue-500 font-bold text-xl  text-white h-13 flex justify-center items-center w-40">
            Bipad Portal
          </li>
          <li className=" font-bold text-xl  text-white h-13 flex justify-center items-center w-75">
            National
          </li>
        </ul>
      </div>
      <div
        ref={mapContainerRef}
        className="w-230 h-[840px] relative " // Adjusted classes for better visibility
      />
    </div>
  );
};

export default MapComponent;
