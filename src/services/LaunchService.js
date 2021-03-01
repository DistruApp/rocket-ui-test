import axios from 'axios';

const SPACEX_URL = 'https://api.spacexdata.com/v3';
const launchesUrl = `${SPACEX_URL}/launches`;

const api = axios.create();

const launchService = {
  get: () => api.get(`${launchesUrl}`)
};

export default launchService;
