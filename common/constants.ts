export const __DEV__ = process.env.NODE_ENV !== 'production';

export const API_BASE_URL = process.env.SPLASH_API_BASE_URL || 'https://online.ntnu.no';

export const API_APPLICATION_PERIODS_URL = `${API_BASE_URL}/api/v1/committee-application-periods/`;
export const API_EVENTS_URL = `${API_BASE_URL}/api/v1/splash-events/?start_time__gte=2021-08-01`;
export const API_LEADERBOARD_URL = `http://localhost:3000/splash/api/sheet`;
export const API_SLACK_URL = `${API_BASE_URL}/api/v1/slack/`;
export const HOURS_FORMAT = new Intl.DateTimeFormat('nb-no', { timeStyle: 'short' });
