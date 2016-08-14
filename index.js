import React from 'react';
import D from 'react-dom';

require('./styles/base.scss');

import About from './components/about';
import Fadder from './components/fadder';
import Partners from './components/partners';
import Calendar from './components/calendar';
import Join from './components/join';
import Contact from './components/contact';
import Slack from './components/slack';
import Social from './components/social';

const App = () => {
  return (
    <div>
      <About />
      <Fadder />
      <Calendar events={sample.results}/>
      <Join />
      <Slack />
      <Social />
      <Contact />
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
      "title": "Title of first ever event",
      "content": "kek some keks",
      "start_time": "2016-08-16T23:00:00Z",
      "end_time": "2016-08-16T23:00:00Z"
    },
    {
      "title": "Title of day 2 first event",
      "content": "day 2, kek more keks",
      "start_time": "2016-08-17T03:00:00Z",
      "end_time": "2016-08-17T04:00:00Z"
    },
    {
      "title": "Title of day 2 SECOND event",
      "content": "pretty warmed up on keking now",
      "start_time": "2016-08-17T05:00:00Z",
      "end_time": "2016-08-17T06:00:00Z"
    },
    {
      "title": "Title of day 3 only event",
      "content": "third day, cool it on the keks m8",
      "start_time": "2016-08-18T10:00:00Z",
      "end_time": "2016-08-18T12:00:00Z"
    }
  ]
};

D.render(
  <App />,
  document.getElementById('app')
);
