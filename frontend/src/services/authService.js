import { apiRequest } from '../api/client';

export const authService = {
  async login(credentials) {
    const response = await apiRequest.post('/auth/login', credentials);
    if (response.data?.token) localStorage.setItem('devmind_access_token', response.data.token);
    return response.data;
  },
  logout() { localStorage.removeItem('devmind_access_token'); },
  isAuthenticated() { return Boolean(localStorage.getItem('devmind_access_token')); }
};
