// src/services/authApi.ts

// This file contains API functions for user authentication, including login and register requests.
// 本文件封装了用户认证相关的 API 接口，包括登录和注册请求

import api from '../utils/api';

export const loginApi = (data: { email: string; password: string }) => {
  return api.post('/auth/login', data).then(res => res.data);
};

export const registerApi = (data: { email: string; password: string }) => {
  return api.post('/auth/register', data).then(res => res.data);
};