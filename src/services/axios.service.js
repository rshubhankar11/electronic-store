// !! All Axios config

import { BASE_URL } from "./helper.service";
import axios from "axios";

export const publicAxios = axios.create({
  baseURL: BASE_URL,
});
