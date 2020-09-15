import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/ViniciusCrisol/nextjs-animation/teams',
});

export default api;
