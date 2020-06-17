import { API_APPLICATION_PERIODS_URL } from 'common/constants';

export const getCurrentApplicationPeriod = async () => {
  const response = await fetch(`${API_APPLICATION_PERIODS_URL}?accepting_applications=True&page_size=1`);
  const { results } = await response.json();
  const [currentApplicationPeriod] = results;
  return currentApplicationPeriod;
};

/**
 * Get the application period which started/starts at the latest time.
 */
export const getLatestApplicationPeriod = async () => {
  const response = await fetch(`${API_APPLICATION_PERIODS_URL}?ordering=-start&page_size=1`);
  const { results } = await response.json();
  const [latestApplicationPeriod] = results;
  return latestApplicationPeriod;
};

/**
 * Get the application period which should be displayed at this moment in time.
 * If there is one that accepts applications it will be shown, else the one starting at
 * the latest time will be shown.
 */
export const getAvailableApplicationPeriod = async () => {
  const current = await getCurrentApplicationPeriod();
  if (current) {
    return current;
  }
  const latest = await getLatestApplicationPeriod();
  if (latest) {
    return latest;
  }

  return null;
};
