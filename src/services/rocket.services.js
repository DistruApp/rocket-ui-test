import axios from 'axios';
import { SERVICES_URL } from '../constants/url.constant';

const serviceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

export const get = rocketId => api.get(`${serviceUrl}/${rocketId}`);
