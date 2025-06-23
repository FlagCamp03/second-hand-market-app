// src/store/auth.ts

// This file defines the global auth state management using Zustand.
// It stores user info and token, and provides login/logout methods.
// 本文件使用 Zustand 定义全局用户认证状态，
// 存储用户信息和 token，并提供登录/登出方法

import { create } from 'zustand';

interface User {
  id: number;
  email: string;
  nickname?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: (token, user) => {
    set({ token, user });
    localStorage.setItem('token', token);
  },
  logout: () => {
    set({ token: null, user: null });
    localStorage.removeItem('token');
  },
}));

export default useAuthStore;
