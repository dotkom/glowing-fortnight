import React from 'react';
import D from 'react-dom';

require('./styles/base.scss');

import About from './components/about';
import Fadder from './components/fadder';
import Partners from './components/partners';
import Calendar from './components/calendar';
import Join from './components/join';

const App = () => {
  return (
    <div>
      <About />
      <Fadder />
      <Calendar events={sample.results} />
      <Join />
      <Partners />
    </div>
  );
};

const sample = {
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "title": "kek1",
      "content": "kek some keks",
      "start_time": "2016-08-10T23:00:00Z",
      "end_time": "2016-08-10T23:00:00Z"
    },
    {
      "title": "kek2uppermostboogaloo",
      "content": "day 2, kek more keks",
      "start_time": "2016-09-11T03:00:00Z",
      "end_time": "2016-09-11T04:00:00Z"
    },
    {
      "title": "continualkek",
      "content": "pretty warmed up on keking now",
      "start_time": "2016-09-11T05:00:00Z",
      "end_time": "2016-09-11T06:00:00Z"
    },
    {
      "title": "kekdown",
      "content": "third day, cool it on the keks m8",
      "start_time": "2016-10-11T10:00:00Z",
      "end_time": "2016-10-11T12:00:00Z"
    }
  ]
};

D.render(
  <App />,
  document.getElementById('app')
);
