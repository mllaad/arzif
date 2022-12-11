import axios from "axios";

export const proxy = axios.create();

// REQUIEST
proxy.interceptors.request.use(
  function (config) {
    // SETUP THE PROXY

    config.url = config.url.replace("https://", "http://localhost:3000/");

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject("something went worng!");
  }
);

// RESPONSE
proxy.interceptors.response.use(
  function (config) {
    // SETUP THE PROXY
    return config.data.data;
  },
  function (error) {
    console.log(error);
    // Do something with request error
    console.warn(`${error.message}
     ${error.config.url}
      "proxy is on?"`);
    console.error(`${error.message}
      ${error.config.url}
       "proxy is on?"`);

    // return Promise.reject(error);
  }
);
