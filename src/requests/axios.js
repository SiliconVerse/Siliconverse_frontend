import axios from 'axios';
import { useAuth } from '../hooks/userAuth';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

async function refreshToken(refreshToken) {
  const auth = useAuth(); // Assuming this works due to context or similar mechanism
  const response = await axiosInstance.post('/users/refresh-token', {
    refreshToken,
  });

  if (response.data) {
    auth.setUser(response.data);
    return true;
  }

  return false;
}

let isRefreshing = false;
let refreshPromise;

const updateToken = (token) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;

export async function handleRequest(method, url, token) {
  try {
    updateToken(token);
    const res = await axiosInstance[method](url);
    if (!res.data) {
      throw new Error('Please try again later');
    }
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function handleSubmit(method, url, data, token) {
  try {
    updateToken(token);
    const res = await axiosInstance[method](url, data);
    if (!res.data) {
      throw new Error('Please try again later');
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data.message || error.message;
    } else {
      throw error.message;
    }
  }
}
