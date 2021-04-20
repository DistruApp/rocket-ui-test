import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';

const api = axios.create();

const launchService = {
  getLaunches: () => api.get(`${SERVICES_URL}/launches`),
  getUpcomingLaunches: () => api.get(`${SERVICES_URL}/launches/upcoming`),
  getPastLaunches: () => api.get(`${SERVICES_URL}/launches/past`),
};

export default launchService;
