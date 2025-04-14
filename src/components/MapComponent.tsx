"use client";
import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import LayerGroup from "ol/layer/Group";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import ArcGIS from "ol/source/TileArcGISRest";
import LayerSwitcher from "ol-layerswitcher";
import { BaseLayerOptions, GroupLayerOptions } from "ol-layerswitcher";
import ScaleLine from "ol/control/ScaleLine";
import "ol/ol.css";
import "ol-layerswitcher/src/ol-layerswitcher.css";

const MapComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const arcgisUrl =
    "https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/USA/MapServer";

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      console.log("Initializing map...");

      // OSM Layer
      const osmLayer = new TileLayer({
        source: new OSM(),
        title: "OpenStreetMap",
        type: "base",
        visible: true,
      } as BaseLayerOptions);

      // ArcGIS Layer
      const arcgisLayer = new TileLayer({
        source: new ArcGIS({ url: arcgisUrl }),
        title: "ArcGIS USA Map",
        type: "base",
        visible: false,
      } as BaseLayerOptions);

      // Stamen Terrain Layer (replacing Google Maps)
      const stamenLayer = new TileLayer({
        source: new XYZ({
          url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
        }),
        title: "Stamen Terrain",
        type: "base",
        visible: false,
      } as BaseLayerOptions);

      // Group base layers
      const baseLayerGroup = new LayerGroup({
        title: "Base Layers",
        layers: [osmLayer, arcgisLayer, stamenLayer],
      } as GroupLayerOptions);

      // Initialize map
      mapRef.current = new Map({
        target: mapContainerRef.current,
        layers: [baseLayerGroup],
        view: new View({
          center: [-100, 40], // USA for testing
          zoom: 4,
          projection: "EPSG:4326",
        }),
        controls: [
          new ScaleLine(),
          new LayerSwitcher({
            activationMode: "mouseover",
            startActive: false,
            groupSelectStyle: "children",
          }),
        ],
      });
    }

    return () => {
      if (mapRef.current) {
        console.log("Cleaning up map...");
        mapRef.current.setTarget(undefined);
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} className="w-300 h-[1080px] relative" />
    </div>
  );
};

export default MapComponent;