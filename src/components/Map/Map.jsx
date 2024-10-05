

import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import locations from "./locations";

const accessToken = "pk.eyJ1IjoibWFrc3ltMTgiLCJhIjoiY2x5c280eDF2MDkweDJrc2N3a2R5c3l1cyJ9.70P7zxzTa0uSxIpnkz7YeA";

export default function MapWithGeocoder() {
    const mapContainerRef = useRef();
    const mapInstanceRef = useRef();
    const [mapLoaded, setMapLoaded] = useState(false);
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        mapboxgl.accessToken = accessToken;

        mapInstanceRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [138.2529, 38.5048],
            zoom: 4.3,
        });

        mapInstanceRef.current.on("load", () => {
            setMapLoaded(true);

            locations.forEach((location) => {
                // Create a new marker for each location
                const marker = new mapboxgl.Marker()
                    .setLngLat(location.coordinates)
                    .addTo(mapInstanceRef.current);

                // Add a popup with a clickable link to Street View
                const popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`
                        <h3>${location.name}</h3>
                        <p><a href="${location.streetViewLink}" target="_blank">View in ${location.name}</a></p>
                    `);

                // Associate the popup with the marker
                marker.setPopup(popup);
            });
        });
    }, []);

    return (
        <>
            <SearchBox
                accessToken={accessToken}
                map={mapInstanceRef.current}
                mapboxgl={mapboxgl}
                value={inputValue}
                onChange={(d) => {
                    setInputValue(d);
                }}
                marker
            />
            <div id="map-container" ref={mapContainerRef} style={{ height: 600 }} />
        </>
    );
}









