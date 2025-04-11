"use client"; // Indicates this is a client-side rendered component
import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import LayerGroup from "ol/layer/Group";
import OSM from "ol/source/OSM";
import ArcGIS from "ol/source/TileArcGISRest.js";
import LayerSwitcher from "ol/layerswitcher";
import { BaseLayerOptions, GroupLayerOptions } from "ol/layerswitcher";
import ScaleLine from "ol/control/ScaleLine.js";
import "ol/ol.css"; // Import OpenLayers CSS
import "ol-layerswitcher/src/ol-layerswitcher.css"; // Import LayerSwitcher CSS

const MapComponent = () => {
  const mapContainerRef = useRef(null); // Reference to the map container DOM element
  const mapRef = useRef<Map | null>(null); // Reference to the OpenLayers map instance
  const url =
    "https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/USA/MapServer";

  useEffect(() => {
    // Initialize the OpenLayers map when the component mounts
    if (!mapRef.current && mapContainerRef.current) {
      // Create base layers with titles for LayerSwitcher
      const osmLayer = new TileLayer({
        source: new OSM(),
        title: "OpenStreetMap",
        type: "base",
      } as BaseLayerOptions);

      const arcgisLayer = new TileLayer({
        source: new ArcGIS({
          url: url,
        }),
        title: "ArcGIS USA Map",
        type: "base",
        visible: false, // Set to false so only one base layer is visible initially
      } as BaseLayerOptions);

      // Group base layers
      const baseLayerGroup = new LayerGroup({
        title: "Base Layers",
        layers: [osmLayer, arcgisLayer],
      } as GroupLayerOptions);

      // Initialize the map
      mapRef.current = new Map({
        target: mapContainerRef.current,
        layers: [baseLayerGroup],
        view: new View({
          center: [85.324, 27.7172],
          zoom: 7,
          projection: "EPSG:4326",
        }),
        controls: [
          new ScaleLine(),
          new LayerSwitcher({
            activationMode: "click",
            startActive: false,
            groupSelectStyle: "children", // Only one base layer can be active at a time
          }),
        ],
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
    <div>
      <div
        ref={mapContainerRef}
        className="w-300 h-[1080] relative"
      />
    </div>
  );
};

export default MapComponent;