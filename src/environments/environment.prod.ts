import { environment as defaultEnvironment } from './environment.defaults';

export const environment = {
  ...defaultEnvironment,
  production: true,
  baseUrl: location.hostname,
  apiUrl: '/api/',
  apiUrlV1: '/api/v1/',
  assetsPath: '/static/frontoffice/assets/',

};
