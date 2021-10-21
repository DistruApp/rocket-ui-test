import axios from 'axios';
import { SERVICES_URL } from '../constants/url.constant';

const serviceUrl = `${SERVICES_URL}/launches?id=true`;

const api = axios.create();

export const get = () => api.get(`${serviceUrl}`);
