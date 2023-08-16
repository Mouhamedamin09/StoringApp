import React, { useState } from 'react';
import savedData from './data';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="app-heading">City Selector</h1>
      <div className="input-container">
        <input
          type="text"
          id="cityInput"
          className="input"
          list="cityList"
          placeholder="Start typing..."
        />
        <datalist id="cityList" className="city-datalist">
          {Object.entries(savedData).map(([value, cityName]) => (
            <option key={value} value={value}>
              {cityName}
            </option>
          ))}
        </datalist>
      </div>
      <footer className="footer">Created by Mohamedamin Kraiem</footer>
    </div>
  );
}

export default App;
