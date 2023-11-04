import React from 'react';
import {TileLayer, Marker, Popup, MapContainer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
const SpatialMap = () => {
  //markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popup: 'Hello I am popup 1',
    },
    {
      geocode: [48.85, 2.3522],
      popup: 'Hello I am popup 2',
    },
    {
      geocode: [48.855, 2.34],
      popup: 'Hello I am popup 3',
    },
    {
      geocode: [48.860, 2.34],
      popup: 'Hello I am popup 4',
    },
  ];

  const customIcon = new Icon ({
    iconUrl: '/location.png',
    iconSize: [38, 38],
  });

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {markers.map (marker => {
          return (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>
                {marker.popup}
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default SpatialMap;
