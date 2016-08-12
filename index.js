import React from 'react';
import D from 'react-dom';

import About from './components/about/';

const App = () => {

  return (
    <div>
      <h1>Hei</h1>
      <About text="12345678"/>
    </div>
  );
};


D.render(
  <App />,
  document.getElementById('app')
);


console.log('tjohei')
