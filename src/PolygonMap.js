import React, { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Polygon,
} from 'react-leaflet';
import {statesData} from './data';

const PolygonMap = () => {
  const center = [40.63463151377654, -97.89969605983609]; // Set the initial center of the map

  const getColor = (value) => {
    // Define your color range based on values
    if (value > 1000) {
      return '#800026';
    } else if (value > 500) {
      return '#BD0026';
    } else if (value > 200) {
      return '#E31A1C';
    } else if (value > 100) {
      return '#FC4E2A';
    } else if (value > 50) {
      return '#FD8D3C';
    } else if (value > 20) {
      return '#FEB24C';
    } else if (value > 10) {
      return '#FED976';
    } else {
      return '#FFEDA0';
    }
  };
  useEffect(() => {
    let positionRight = document.getElementsByClassName (
        'leaflet-right'
      )[0];

      positionRight.innerHTML = 'Click on a state';
  }, [])
  return (
    <MapContainer
      scrollWheelZoom={false}
      center={center}
      zoom={5}
      style={{height: '100vh', width: '100vw'}}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=osbNpgzzUBDjmTjKbvIw"
        attribution="<a href=&quot;https://www.maptiler.com/copyright/&quot; target=&quot;_blank&quot;>&copy; MapTiler</a> <a href=&quot;https://www.openstreetmap.org/copyright&quot; target=&quot;_blank&quot;>&copy; OpenStreetMap contributors</a>"
      />

      {statesData.features.map (state => {
        const coordinates = state.geometry.coordinates[0].map (item => [
          item[1],
          item[0],
        ]);
        const density = state.properties.density;
        const name = state.properties.name;

        return (
          <Polygon
            pathOptions={{
              fillColor: getColor (density), //dynamic color from colorDictionary
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: '#FFF',
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: e => {
                const layer = e.target;
                console.log ('layer', layer);
                layer.setStyle ({
                  fillOpacity: 1,
                  weight: 5,
                  dashArray: '',
                  color: '#666',
                });
                
              },
              mouseout: e => {
                const layer = e.target;
                layer.setStyle ({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: '3',
                  color: '#FFF',
                  fillColor: getColor (density),
                });
              },
              click: e => {
                let positionRight = document.getElementsByClassName (
                    'leaflet-right'
                  )[0];
  
                  positionRight.innerHTML = `<h4>US Population Density</h4> ${state.properties ? `<b>${name}</b><br />${density} people / mi<sup>2</sup>` : 'Hover over a state'}`;
              },
            }}
          />
        );
      })}

    </MapContainer>
  );
};

export default PolygonMap;
