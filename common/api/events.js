import { API_EVENTS_URL } from '../constants';

export const getEvents = async () => {
  try {
    const response = await fetch(API_EVENTS_URL, {
      method: 'GET',
      mode: 'cors',
    });
    const data = await response.json();
    return data.results;
  } catch {
    return null;
  }
};
