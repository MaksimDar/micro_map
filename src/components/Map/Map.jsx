// src/components/Map.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFrc3ltMTgiLCJhIjoiY2x5c280eDF2MDkweDJrc2N3a2R5c3l1cyJ9.70P7zxzTa0uSxIpnkz7YeA';

const MapBox = () => {
    const mapContainer = useRef(null);
    const japanCoordinates = [138.2529, 36.2048];
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            // style: 'mapbox://styles/mapbox/streets-v11',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: japanCoordinates,
            zoom: 4
        });

        map.addControl(new mapboxgl.NavigationControl());
        map.on('style.load', () => {
            map.setConfigProperty('basemap', 'lightPreset', 'dusk');
        });

        return () => map.remove(); // Cleanup map on unmount
    }, []);

    return <div ref={mapContainer} className="map-container" />;
};

export default MapBox;

