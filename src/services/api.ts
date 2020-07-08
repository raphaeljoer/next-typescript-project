import axios from 'axios';

const api = axios.create({
  baseURL: 'http://recantoce.org/app/wp-json/',
});

export default api;
