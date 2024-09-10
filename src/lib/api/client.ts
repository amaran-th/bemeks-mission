import axios from "axios";

export const client = axios.create({
  baseURL: "/soil_psorms_api",
  withCredentials: true,
});
