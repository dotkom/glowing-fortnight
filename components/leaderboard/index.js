import React from 'react';
import Leaderboard from './leaderboard';

const LeaderboardContainer = ({ data, groupNames }) => {
  return (
    <section id="leaderboard" className="component">
      <h1>Highscore</h1>
      <p>
        De forskjellige faddergruppene kan samle poeng gjennom fadderuken. Under finnes en oversikt over midlertidig
        rangering:
      </p>
      <Leaderboard scores={data} showGroupNames={groupNames} />
    </section>
  );
};

export default LeaderboardContainer;
