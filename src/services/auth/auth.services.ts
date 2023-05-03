import axios from 'axios';

const LOGIN_API = `${process.env.REACT_APP_BASE_API_URL}/login`;
const REGISTER_API = `${process.env.REACT_APP_BASE_API_URL}/register`;

const login = (credentials: {}) =>
  axios.post(LOGIN_API, {
    ...credentials,
  });

const register = (credentials: {}) =>
  axios.post(REGISTER_API, {
    ...credentials,
  });

export const AuthService = {
  login,
  register,
};
