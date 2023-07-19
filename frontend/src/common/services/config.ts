import axios from 'axios';

export const SERVER_BASE_URL = `${import.meta.env.VITE_SERVER_BASE_URL}/v1`;
export const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_BASE_URL;

export const instance = axios.create({
  baseURL: SERVER_BASE_URL,
});
