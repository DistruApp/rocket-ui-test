import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
// By default the launches API doesn't return the mongo db document_id.
// It's useful as a key for when we're listing listing multiple
// launches on a page, so we by default tell the API to give it to us.
// Note: We export it for use in testing
export const launchesWithIdUrl = `${SERVICES_URL}/launches?id=true`;

const api = axios.create();

const launchService = {
  get: () => api.get(`${launchesWithIdUrl}`)
};

export default launchService;
