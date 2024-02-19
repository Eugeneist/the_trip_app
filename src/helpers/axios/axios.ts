import axios from 'axios';

const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use(function (response) {
  return response.data;
});

export default instance;
