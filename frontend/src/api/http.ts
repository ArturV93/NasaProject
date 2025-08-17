import { AxiosRequestConfig } from "axios";
import axiosClient from "../lib/axiosClient";

// Generic GET request
export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await axiosClient.get<T>(url, config);
  return response.data;
};