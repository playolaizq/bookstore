import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_SERVER_BASE_URL}/v1`;

export const instance = axios.create({
  baseURL: BASE_URL,
});
