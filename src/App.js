import './App.css';
import React from 'react';
import Navbar from './components/Navbar/index.js';
import Home from './components/Home/HomeIndex.js';

function App() {
  return (
    <div className="App">
     <div style={{backgroundColour:"red"}} >
     <Navbar></Navbar>
     <Home></Home>
     </div>
    </div>
  );
}

export default App;
