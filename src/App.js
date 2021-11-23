import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.js';
import Cube from './components/Cube.js';
import Title from './components/Title';
import data from './data.json';

function App() {

  console.log(data.results[0]);
  const [clickCount, setClickCount] = useState(0);


  return (
    <div className="App">
      <Title>My React App</Title>
      <Button setCount={setClickCount}>{clickCount}</Button>
      <Cube>{clickCount}</Cube>
    </div>
  );
}

export default App;
