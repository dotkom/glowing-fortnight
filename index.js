import React from 'react';
import D from 'react-dom';

require('./styles/main.scss');

import About from './components/about';
import Fadder from './components/fadder';
import Join from './components/join';

const App = () => {
  return (
    <div>
      <About />
      <Fadder />
      <Join />
    </div>
  );
};

D.render(
  <App />,
  document.getElementById('app')
);
