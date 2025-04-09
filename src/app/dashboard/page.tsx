'use client'
import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const MapComponent = () => {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    mapRef.current = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [85.3240, 27.7172], // Kathmandu coordinates as an example
        zoom: 7,
      }),
    });

    return () => {
      mapRef.current = null; // Cleanup reference on unmount
    };
  }, []);

  return <div id="map" style={{ width: '400px', height: '20px' }} />;
};

export default MapComponent;