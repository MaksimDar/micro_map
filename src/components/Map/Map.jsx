// src/components/Map.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css'; // Import your CSS file for styling

mapboxgl.accessToken = 'pk.eyJ1IjoibWFrc3ltMTgiLCJhIjoiY2x5c280eDF2MDkweDJrc2N3a2R5c3l1cyJ9.70P7zxzTa0uSxIpnkz7YeA';

const Map = () => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
        });

        map.addControl(new mapboxgl.NavigationControl());

        return () => map.remove(); // Cleanup map on unmount
    }, []);

    return <div ref={mapContainer} className="map-container" />;
};

export default Map;

