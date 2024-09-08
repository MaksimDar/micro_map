import React from "react";
import MapBox from '../Map';
// import PlaceSearch from "../PlaceSearch";
import { Section } from './MapSection.styled';

const MapSection = () => {

    return (
        <>
            <Section>
                {/* <PlaceSearch /> */}
                {/* <MapContainer> */}
                <MapBox />
                {/* </MapContainer> */}
            </Section>

        </>
    )
};

export default MapSection;