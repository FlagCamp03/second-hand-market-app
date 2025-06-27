// src/store/auth.ts

// This file defines the global auth state management using Zustand
// It stores user info and token, and provides login/logout methods

import { create } from "zustand";

// User info interface
export interface User {
  id: number;
  email: string;
  nickname?: string;
  avatar?: string;
}

// Zustand state shape for authentication
interface AuthState {
  user: User | null; // Currently logged-in user
  token: string | null; // Authentication token
  login: (token: string, user: User) => void; // Login method
  logout: () => void; // Logout method
}

// Create Zustand store
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: (token, user) => {
    set({ token, user }); // Update auth state
    localStorage.setItem("token", token); // Store token in localStorage
  },
  logout: () => {
    set({ token: null, user: null }); // Clear auth state
    localStorage.removeItem("token"); // Remove token from localStorage
  },
}));

export default useAuthStore;
