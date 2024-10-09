import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.banca-estebanquita.com',
});

export default api;