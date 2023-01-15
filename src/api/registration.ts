import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const config = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);

export const register = async <K, T>(path: K, credentials: T) => {
  const data = await axiosInstance.post(path, credentials);
  return data.data;
};
