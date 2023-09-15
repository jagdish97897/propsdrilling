
import './App.css';
import React from 'react';
import Parent from './Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>Message Passing Example</h1>
      <Parent message="Hello from App!" />
      </div>
      </header>
    </div>
  );
}

export default App;
