// !! All user servie APi calls

import { publicAxios } from "./axios.service";
// New user register
export const registerUser = (userData) => {
  return publicAxios.post(`users`, userData).then((response) => {
    return response.data;
  });
};
//Login user
export const loginUser = (userData) => {
  return publicAxios
    .post(`/auth/login`, userData)
    .then((response) => response.data);
};
