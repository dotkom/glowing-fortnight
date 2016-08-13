import React from 'react';
import D from 'react-dom';

require('./styles/base.scss');

import About from './components/about';
import Fadder from './components/fadder';
import Partners from './components/partners';
import Join from './components/join';

const App = () => {
  return (
    <div>
      <About />
      <Fadder />

      <Join />
      <Partners />
    </div>
  );
};

D.render(
  <App />,
  document.getElementById('app')
);
