import axios from 'axios';

const SPACEX_URL = 'https://api.spacexdata.com/v4';
const getLaunchesUrl = `${SPACEX_URL}/launches`;

const api = axios.create();

const launchService = {
  getAll: () => api.get(getLaunchesUrl)
};

export default launchService;
