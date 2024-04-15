import axios from "axios";

const API_BASE_URL = "http://localhost:9000/users";

export const checkIsLoggedIn = async () => {
  const response = await axios.get(`${API_BASE_URL}/isLoggedIn`, {
    withCredentials: true,
  });
  console.log(response.data.isLoggedIn);
  return response.data;
};

export const login = async (username, password) => {
  const data = { username, password };
  const response = await axios.post(`${API_BASE_URL}/login`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(
    `${API_BASE_URL}/logout`,
    {},
    { withCredentials: true },
  );
  return response;
};

export const register = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/register`, data, {
    withCredentials: true,
  });
  return response;
};
