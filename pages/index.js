import Head from 'next/head';
import React from 'react';

import { getEvents } from 'common/api/events';
import { getLeaderboard } from 'common/api/leaderboard';

import About from '../components/about';
import Fadder from '../components/fadder';
import Partners from '../components/partners';
import Calendar from '../components/calendar';
import Join from '../components/join';
import Contact from '../components/contact';
import Slack from '../components/slack';
import Social from '../components/social';
import Warning from '../components/warning';
import Leaderboard from '../components/leaderboard';

export const getServerSideProps = async () => {
  const events = await getEvents();
  const leaderboard = await getLeaderboard();

  return {
    props: {
      events,
      leaderboard,
    },
  };
};

const App = ({ events, leaderboard }) => {
  return (
    <>
      <Head>
        <title>Fadderukene | Linjeforeningen Online</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div>
        <About />
        <Fadder />
        <Calendar events={events} />
        {leaderboard && leaderboard.active && (
          <Leaderboard data={leaderboard.data} groupNames={leaderboard.groupNames} />
        )}
        <Join />
        <Slack />
        <Warning />
        <Social />
        <Contact />
        <Partners />
      </div>
    </>
  );
};

export default App;
