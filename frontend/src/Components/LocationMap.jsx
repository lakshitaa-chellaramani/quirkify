// LocationMap.js
import React from 'react';
import Map from './Map'; // Adjust the path based on your file structure
import './Map.css';

const LocationMap = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-black mb-4">Find Us Here</h2>
      <div className="rounded-lg overflow-hidden">
        <Map />
      </div>
    </div>
  );
};

export default LocationMap;
