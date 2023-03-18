import axios from 'axios';
import { isNil } from 'lodash';

export const baseUrl = 'https://web-shop-backend.onrender.com';

// export const baseUrl = 'http://localhost:3000/';

const config = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);

export const get = async <T>(
  path: string,
  token?: string | null
): Promise<T> => {
  if (!isNil(token)) {
    const { data } = await axiosInstance.get<T>(path, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return data;
  }

  const { data } = await axiosInstance.get<T>(path);
  return data;
};

export const post = async <T>(path: string, body: T, token?: string | null) => {
  if (!isNil(token)) {
    const { data } = await axiosInstance.post(path, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return data;
  }

  const data = await axiosInstance.post(path, body);
  return data.data;
};

export const patch = async <T>(path: string, body: T, token: string | null) => {
  const { data } = await axiosInstance.patch<T>(path, body, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return data;
};

export const remove = async <T>(path: string, token: string | null) => {
  const { data } = await axiosInstance.delete<T>(path, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return data;
};
