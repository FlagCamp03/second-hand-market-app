// src/utils/api.ts

// This file sets up the base Axios instance with a base URL and
// automatically attaches the token from localStorage to all requests.
// 本文件配置了基础的 Axios 实例，设置了 base URL，
// 并为所有请求自动附加本地存储的 token

import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
