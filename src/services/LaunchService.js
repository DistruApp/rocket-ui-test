import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v4';
const serviceUrl = `${SERVICES_URL}/launches`;

const api = axios.create();

const launchService = {
  get: () => api.post(`${serviceUrl}/query`, {
    "query": {},
    "options": {
      "select": 'id name flight_number',
      "pagination": false,
      "populate": [{
        "path": "rocket",
        "select": 'id description cost_per_launch'
      }]
    }
  })
};

export default launchService;
