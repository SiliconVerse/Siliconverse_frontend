import axios from "axios";
import { auth } from "../hooks/auth/firebase";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const updateToken = async (token) => {
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
    await updateToken(token);

    const res = await axiosInstance[method](url);
    if (!res.data) {
      throw new Error("Please try again later");
    }
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function handleSubmit(method, url, data) {
  try {
    await updateToken(auth.currentUser.accessToken);
    const res = await axiosInstance[method](url, data);
    if (!res.data) {
      throw new Error("Please try again later");
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
