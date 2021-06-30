import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';

const api = axios.create();
const verbs = ['get', 'put', 'post', 'del']

const launchService = {
  getLaunches: () => api.get(`${SERVICES_URL}/launches`),
  getLaunch: (id) => api.get(`${SERVICES_URL}/launches/${id}`),
  getRocket: (id) => api.get(`${SERVICES_URL}/rockets/${id}`),
};

export default launchService;
