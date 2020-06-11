import Head from 'next/head';
import React from 'react';

import { getEvents } from 'common/api/events';

import About from '../components/about';
import Fadder from '../components/fadder';
import Partners from '../components/partners';
import Calendar from '../components/calendar';
import Join from '../components/join';
import Contact from '../components/contact';
import Slack from '../components/slack';
import Social from '../components/social';
import { getAvailableApplicationPeriod } from '../common/api/committeeApplications';

export const getStaticProps = async () => {
  const events = await getEvents();
  const applicationPeriod = await getAvailableApplicationPeriod();
  return {
    unstable_revalidate: 60 * 60,
    props: {
      events,
      applicationPeriod,
    },
  };
};

const App = ({ events, applicationPeriod }) => {
  return (
    <>
      <Head>
        <title>Fadderukene | Linjeforeningen Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <About />
        <Fadder />
        <Calendar events={events} />
        <Join applicationDeadline={applicationPeriod.deadline} />
        <Slack />
        <Social />
        <Contact />
        <Partners />
      </div>
    </>
  );
};

export default App;
