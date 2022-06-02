import React from 'react';
import ReactDOM from 'react-dom';

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

const colorBar = (colorCode) => (
  <div
    style={{
      backgroundColor: `${colorCode}`,
      height: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      textAlign:'center',
      verticalAlign: 'middle'
    }}>
    {colorCode}
  </div>
);
const HexaColor = () => (
  <div style={{ 'list-style-type': 'none' }}>
    {[...Array(5).keys()].map((name, index) => (
      <li key={index}>{colorBar(hexaColor())}</li>
    ))}
  </div>
);

const App = () => (
  <div>
    <HexaColor />
  </div>
);

const rootElement = document.getElementById('root');
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
