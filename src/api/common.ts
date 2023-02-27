import axios from 'axios';

export const baseUrl = 'https://guitar-center.onrender.com';
// export const baseUrl = 'http://localhost:3000';

const config = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);

export const get = async <T>(path: string): Promise<T> => {
  const { data } = await axiosInstance.get<T>(path);
  return data;
};

export const register = async <T>(path: string, credentials: T) => {
  const data = await axiosInstance.post(path, credentials);
  return data.data;
};
