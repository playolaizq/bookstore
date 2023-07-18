import axios from 'axios';

const BASE_URL = 'http://localhost:3333/v1';

export const instance = axios.create({
  baseURL: BASE_URL,
});
