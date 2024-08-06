import React from "react";
import MapBox from '../Map';
import { Section, MapContainer } from './MapSection.styled';
const MapSection = () => {

    return (
        <>
            <Section>
                <MapContainer>
                    <MapBox />
                </MapContainer>
            </Section>

        </>
    )
};

export default MapSection;