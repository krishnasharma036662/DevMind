import apiClient from "../api/client";

const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
};

export const login = async (credentials) => {
  const response = await apiClient.post(AUTH_ENDPOINTS.LOGIN, credentials);

  return response.data;
};

export const register = async (userData) => {
  const response = await apiClient.post(
    AUTH_ENDPOINTS.REGISTER,
    userData
  );

  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post(AUTH_ENDPOINTS.LOGOUT);

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await apiClient.get(AUTH_ENDPOINTS.ME);

  return response.data;
};