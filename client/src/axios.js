import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("persist:auth");
    console.log(token);
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response.data;
  }
);
export default instance;
