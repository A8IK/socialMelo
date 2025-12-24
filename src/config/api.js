const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9000';

export const API_ENDPOINTS = {
  INSTAGRAM_DOWNLOAD: `${API_BASE_URL}/api/download/instagram`,
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/api/auth/register`,
  AUTH_GOOGLE: `${API_BASE_URL}/api/auth/google`,
  HEALTH: `${API_BASE_URL}/api/health`,
};

export default API_BASE_URL;