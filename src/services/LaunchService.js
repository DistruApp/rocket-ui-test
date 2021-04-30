import axios from 'axios';

// External SpaceX API reference: https://documenter.getpostman.com/view/2025350/RWaEzAiG
// TODO: Check out version 4 of the API.
// External SpaceX API reference for v4: https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4
// TODO: Unless v4 is different, will need a service for fetching rocket details specifically for Cost Per Launch data point.
const SERVICES_URL = 'https://api.spacexdata.com/v4';
const serviceUrl = `${SERVICES_URL}/launches`;

const api = axios.create();

const launchService = {
  get: () => api.get(`${serviceUrl}`)
};

export default launchService;
