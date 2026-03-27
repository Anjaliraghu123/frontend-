import axios from "axios";

const API_URL = " https://backend-kg76.onrender.com/api/student"; // your backend port

// Register
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};