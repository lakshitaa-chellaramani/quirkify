// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import your custom marker icon
import customMarker from '../assets/pin.gif'; // Adjust the path based on your file structure

const Map = () => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  const initialLocation = [40.7128, -74.0060]; // Replace with your coordinates

  // Define a custom marker icon
  const customIcon = new L.Icon({
    iconUrl: customMarker,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={initialLocation}
      zoom={13}
      style={mapStyles}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={initialLocation} icon={customIcon}>
        <Popup>
          Your Food Truck's Name
          <br />
          123 Main Street, Cityville
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
