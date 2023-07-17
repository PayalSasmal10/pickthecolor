import logo from './logo.svg';
import './App.css';
import { ColorPicker, useColor } from 'react-color-palette';
import "react-color-palette/lib/css/styles.css";
import { SketchPicker } from 'react-color';

function App() {
  const [color, setColor] = useColor("lightblue");
  console.log(color);
  console.log(setColor);
  return (
    <div>
      <h1>Color Picker</h1>
      <SketchPicker
        color={color}
        onChange={setColor}
       />
    </div>
  );
}

export default App;
