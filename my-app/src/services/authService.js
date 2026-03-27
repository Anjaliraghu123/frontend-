const API_URL = "https://backend-kg76.onrender.com";

export const registerUser = (data) =>
  axios.post(`${API_URL}/api/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${API_URL}/api/auth/login`, data);