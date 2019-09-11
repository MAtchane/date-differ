import React from 'react';
import DateDiffer from './DateDiffer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Date Differ</h1>
        <h3>
        A simple utility that calculates the difference between two dates.
        </h3>

      <DateDiffer/> 
    </div>
  );
}

export default App;
