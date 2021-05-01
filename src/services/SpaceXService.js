import axios from 'axios';

// External SpaceX API reference for v4: https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4
const BASE_SERVICES_URL = 'https://api.spacexdata.com/v4';
const CONFIG = {
   baseServicesUrl: BASE_SERVICES_URL,
   launchUrl: `${BASE_SERVICES_URL}/launches`,
   rocketUrl: `${BASE_SERVICES_URL}/rockets`,
}

const api = axios.create();

const SpaceXService = {
  getLaunches: () => api.get(`${CONFIG.launchUrl}`),
  getRocket: (id) => api.get(`${CONFIG.rocketUrl}/${id}`),
  getRockets: () => api.get(`${CONFIG.rocketUrl}`),
};

export default SpaceXService