import React from 'react';

interface leaderboardProps {
  scores: string[];
  showGroupNames: boolean;
}

const leaderboard: React.FC<leaderboardProps> = ({ showGroupNames, scores }) => {
  console.log(scores[0]);
  const goldScore = showGroupNames ? scores[0][0] : scores[0] || 0;
  const silverScore = showGroupNames ? scores[1][0] : scores[1] || 0;
  const bronzeScore = showGroupNames ? scores[2][0] : scores[2] || 0;

  const runnerUps = [...scores].splice(3);

  return (
    <>
      <div className="podium">
        <div className="bronze">{bronzeScore}</div>
        <div className="gold">{goldScore}</div>
        <div className="silver">{silverScore}</div>
      </div>
      {runnerUps.length != 0 && (
        <div className="runner-ups">
          <h2>Runner ups:</h2>

          {runnerUps.map((score, key) => {
            key = key + 3;
            return (
              <p>
                #{key}: {showGroupNames ? score[0] : score[1]}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default leaderboard;
