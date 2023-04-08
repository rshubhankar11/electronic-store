// !! All user servie APi calls

import { publicAxios } from "./axios.service";

export const registerUser = (userData) => {
  return publicAxios.post(`users`, userData).then((response) => {
    return response.data;
  });
};
