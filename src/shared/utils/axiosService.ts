import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

export default axiosInstance