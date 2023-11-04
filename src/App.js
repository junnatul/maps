import React from 'react';
import 'react-router-dom';
import './App.css';
import SpatialMap from './SpatialMap';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PolygonMap from './PolygonMap';

function App () {
  const samplePolygonData = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-74.0060, 40.7128], // Example: New York
          [-118.2437, 34.0522], // Example: Los Angeles
          [-95.3698, 29.7604], // Example: Houston
          [-74.0060, 40.7128], // Close the polygon
        ],
      ],
    },
  };

  return (
    <div id="map">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/polygon-map">Polygon Map</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <SpatialMap />
            </Route>
            
            <Route exact path="/polygon-map">
              <PolygonMap data={samplePolygonData}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
