import axios from 'axios';


const api = axios.create({
  baseURL: `https://papas-burgueria-dev.4.us-1.fl0.io/api/`,
});

export default api;