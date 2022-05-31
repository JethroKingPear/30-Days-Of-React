import React from 'react';
import ReactDOM from 'react-dom';

const jsxElement = (
  <p>
    Import and render the following images
    <a>
      <img src='' />
    </a>
  </p>
);

const rootElement = document.getElementById('root');

ReactDOM.render(jsxElement, rootElement);
