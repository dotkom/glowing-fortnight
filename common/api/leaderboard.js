import { API_LEADERBOARD_URL } from '../constants';

export const getLeaderboard = async () => {
  try {
    const response = await fetch(API_LEADERBOARD_URL);
    return await response.json();
  } catch {
    return null;
  }
};
