import logo from './logo.svg';
import './App.css';

import { SketchPicker } from 'react-color';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("lightblue");
  console.log(color);
  console.log(setColor);
  return (
    <div className='App'>
      <h1>Color Picker</h1>
      <SketchPicker
        color={color}
        onChange={(updateColor) => setColor(updateColor.hex)}
       />
    </div>
  );
}

export default App;
