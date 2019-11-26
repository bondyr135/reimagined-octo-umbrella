import React from 'react';
import './App.css';

import Map from './Map/Map';
import Sidebar from './containers/Sidebar/Sidebar';
import ResetLocations from './Map/reset-locations';

function App() {

  return (
    <div className="App">
      <Map id='map' />
      <div>
        <Sidebar id='sidebar' />
        <ResetLocations />
      </div>
    </div>
  );
}

export default App;
