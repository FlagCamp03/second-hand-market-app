// src/utils/api.ts

// This file sets up the base Axios instance with a base URL and
// automatically attaches the token from localStorage to all requests

import axios from 'axios';

const api = axios.create({
  baseURL: "/api", // Base path for all API requests
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // // Get token from localStorage
  if (token) config.headers.Authorization = `Bearer ${token}`; // Set Authorization header
  return config;
});

export default api;
