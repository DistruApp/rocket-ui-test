import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
// By default the launches API doesn't return the mongo db document_id.
// It's useful as a key for when we're listing listing multiple
// launches on a page, so we by default tell the API to give it to us.
// Note: We export it for use in testing
export const launchesUrl = `${SERVICES_URL}/launches`;
export const rocketUrl = `${SERVICES_URL}/rockets`

// Used to throw errors from non-200 responses when using fetch.
const checkStatus = (response, defaultValue) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  
  if (defaultValue !== undefined) {
    return {data: defaultValue};
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

// Default value will be safe returned when there is an issue
// with the API call, isntead of throwing an error
const fetchJSON = (route, defaultValue = undefined) => (
  axios.get(route)
    .then(response => checkStatus(response, defaultValue))
    .then(response => response.data)
);

export const fetchLaunches = (withId = true) => fetchJSON(`${launchesUrl}?id=${withId}`, []);
export const fetchRocket = (rocketId) => fetchJSON(`${rocketUrl}/${rocketId}`, {});
