import axios from 'axios';

const SPACEX_URL = 'https://api.spacexdata.com/v4';
const getRocketUrlTemplate = `${SPACEX_URL}/rockets`;

const api = axios.create();

const rocketService = {
  get: (id) => api.get(`${getRocketUrlTemplate}/${id}`)
};

export default rocketService;
