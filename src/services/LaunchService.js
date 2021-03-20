import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/launches`;
const rocketServiceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

const launchService = {
  get: () => api.get(`${serviceUrl}`),
  getRocket: (rocketId) => api.get(`${rocketServiceUrl}/${rocketId}`),
};

export default launchService;
