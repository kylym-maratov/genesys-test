import { useDefaultStore } from "@/stores/store";
import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const defaultStore = useDefaultStore();
    config.baseURL = "/";
    config.headers.set("Content-Type", "application/json");
    defaultStore.setError("");
    defaultStore.setLoading(true);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    const defaultStore = useDefaultStore();
    defaultStore.setLoading(false);
    return response;
  },
  function (error) {
    const defaultStore = useDefaultStore();
    defaultStore.setError(error.message || "Unknown Error");
    return Promise.reject(error);
  }
);

export const request = (
  url: string = "",
  method: string = "GET",
  data: any = null
) => {
  return axios.request({ url, method, data: JSON.stringify(data) });
};
