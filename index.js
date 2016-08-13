import React from 'react';
import D from 'react-dom';

require('./styles/base.scss');

import About from './components/about';
import Fadder from './components/fadder';
import Partners from './components/partners';
import Join from './components/join';
import Contact from './components/contact';
import Social from './components/social';

const App = () => {
  return (
    <div>
      <About />
      <Fadder />

      <Join />

      <Social />
      <Contact />
      <Partners />
    </div>
  );
};

D.render(
  <App />,
  document.getElementById('app')
);
