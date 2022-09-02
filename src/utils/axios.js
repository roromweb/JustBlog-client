import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3002/api/v1',
});

instance.interceptors.request.use((config, error) => {
  try {
    config.headers.Autorisation = window.localStorage.getItem('token');
    return config;
  } catch (e) {
    return Promise.reject(error);
  }
});

export default instance;
