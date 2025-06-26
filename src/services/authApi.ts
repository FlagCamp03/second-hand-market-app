// src/services/authApi.ts

// This file contains API functions for user authentication, including login and register requests

import api from '../utils/api';

// Login API call with email and password
export const loginApi = (data: { email: string; password: string }) => {
  return api.post("/auth/login", data).then((res) => res.data); // Return server response
};

// Register API call with email and password
export const registerApi = (data: { email: string; password: string }) => {
  return api.post("/auth/register", data).then((res) => res.data); // Return server response
};

