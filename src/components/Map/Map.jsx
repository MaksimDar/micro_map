

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import { getCoordinates } from '../PlaceSearch/CoordinatesStore';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFrc3ltMTgiLCJhIjoiY2x5c280eDF2MDkweDJrc2N3a2R5c3l1cyJ9.70P7zxzTa0uSxIpnkz7YeA';


const MapBox = () => {
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);
    const [coordinates, setCoordinates] = useState([]);
    const getZoom = () => {
        if (coordinates[0].lng == 138.2529 && coordinates[0].lat == 38.5048) {
            return 4
        } else {
            return 9
        }
    }

    useEffect(() => {
        const savedCoordinates = getCoordinates();
        setCoordinates(savedCoordinates);

        mapInstance.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [savedCoordinates[0].lng, savedCoordinates[0].lat],
            zoom: savedCoordinates.length === 1 ? 9 : 4
        });

        mapInstance.current.addControl(new mapboxgl.NavigationControl());

        if (savedCoordinates.length > 1) {
            const bounds = new mapboxgl.LngLatBounds();
            savedCoordinates.forEach(coord => bounds.extend([coord.lng, coord.lat]));
            mapInstance.current.fitBounds(bounds, {
                padding: 50,
                essential: true
            });
        } else {
            mapInstance.current.flyTo({
                center: [savedCoordinates[0].lng, savedCoordinates[0].lat],
                zoom: 9,
                essential: true
            });
        }

        return () => mapInstance.current.remove();
    }, []);

    useEffect(() => {
        if (coordinates.length > 0 && mapInstance.current) {
            if (coordinates.length > 1) {
                const bounds = new mapboxgl.LngLatBounds();
                coordinates.forEach(coord => bounds.extend([coord.lng, coord.lat]));
                mapInstance.current.fitBounds(bounds, {
                    padding: 50,
                    essential: true
                });
            } else {
                mapInstance.current.flyTo({
                    center: [coordinates[0].lng, coordinates[0].lat],
                    zoom: 9,
                    essential: true
                });
            }
        }
    }, [coordinates]);

    return <div ref={mapContainer} className="map-container" />;
};

export default MapBox;






