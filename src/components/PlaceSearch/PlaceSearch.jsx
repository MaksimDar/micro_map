import React, { useState } from 'react';
import cities from '../../data.json';
import { saveCoordinates } from './CoordinatesStore';


const PlaceSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();

        const filteredCities = cities.filter(city =>
            city.city.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filteredCities);

        const coordinatesList = filteredCities.map(city => ({
            lat: city.lat,
            lng: city.lng
        }));
        saveCoordinates(coordinatesList);
    };

    return (
        <div>
            <h2>Find your city</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a city"
                />
                <button type="submit" >Search</button>
            </form>
            <div>
                {results.length > 0 ? (
                    <ul>
                        {results.map(city => (
                            <li key={city.id}>
                                {city.city} - {city.country}
                                <p>Coordinates: {city.lat}, {city.lng}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No city found</p>
                )}
            </div>
        </div>
    );
};

export default PlaceSearch;




