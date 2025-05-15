import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix default icon issue with Leaflet + React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function RecenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 16); // Zoom to 16 and center on position
    }
  }, [position, map]);
  return null;
}

export default function Map({ address }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (!address) return;

    async function fetchCoordinates() {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        } else {
          console.error('Address not found');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    }

    fetchCoordinates();
  }, [address]);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer
        center={position || [20, 0]} // default center if position not loaded
        zoom={position ? 16 : 2} // reasonable zoom level
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && <Marker position={position}>
          <Popup>{address}</Popup>
        </Marker>}
        {position && <RecenterMap position={position} />}
      </MapContainer>
    </div>
  );
}
