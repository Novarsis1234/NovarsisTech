// import axios from 'axios';
// import Cookies from 'js-cookie';


// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL, // Set your base URL here
//   // You can also set other default configurations here
// });

// // Request interceptor to attach the token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token && !config.url.includes('/auth/')) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor to handle token refresh
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response) {
//       const status = error.response.status;

//       if (status === 401 && !originalRequest._retry) {
//         // Prevent infinite loops
//         originalRequest._retry = true;

//         try {
//           // Get the refresh token from cookies
//           const refreshToken = Cookies.get('refreshToken');


//           // Attempt to refresh the token
//           const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/refresh`, null, {
//             withCredentials: true, // Ensure cookies are sent with the request
//             token: refreshToken
//           });

//           // Get the new token from the response
//           const newToken = response.data?.access_token;

//           if (newToken) {
//             // Store the new token in local storage
//             localStorage.setItem('token', newToken);

//             // Update the Axios instance with the new token
//             axiosInstance.defaults.headers['Authorization'] = `Bearer ${newToken}`;

//             // Update the original request with the new token and retry
//             originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
//             return axiosInstance(originalRequest);
//           } else {
//             // Handle case where no new token is received
//             localStorage.removeItem('token');
//             localStorage.removeItem('user');
//             window.location.href = 'signin';
//             return Promise.reject(error);
//           }
//         } catch (refreshError) {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//           window.location.href = 'signin';
//           return Promise.reject(refreshError);
//         }
//       } else {
//         return Promise.reject(error);
//       }
//     } else {
//       // Handle case where error.response is not defined
//       return Promise.reject(error);
//     }
//   }
// );

// export default axiosInstance;


import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 25000, // 🔑 Render wake-up safe
  withCredentials: true,
});

// ================= REQUEST INTERCEPTOR =================
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && !config.url.includes("/auth/")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ================= RESPONSE INTERCEPTOR =================
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // -----------------------------
    // 🔁 RENDER SLEEP RETRY (GET only)
    // -----------------------------
    if (
      originalRequest &&
      !originalRequest._retry &&
      originalRequest.method === "get" &&
      (!error.response || error.response.status >= 500)
    ) {
      originalRequest._retryCount = originalRequest._retryCount || 0;

      if (originalRequest._retryCount < 3) {
        originalRequest._retryCount += 1;

        console.log(
          `🔁 Retry ${originalRequest._retryCount}/3 — waking backend...`
        );

        await new Promise((res) => setTimeout(res, 4000));
        return axiosInstance(originalRequest);
      }
    }

    // -----------------------------
    // 🔐 TOKEN REFRESH LOGIC (401)
    // -----------------------------
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refreshToken");

        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/admin/refresh`,
          null,
          {
            withCredentials: true,
            headers: {
              token: refreshToken,
            },
          }
        );

        const newToken = response.data?.access_token;

        if (newToken) {
          localStorage.setItem("token", newToken);

          axiosInstance.defaults.headers[
            "Authorization"
          ] = `Bearer ${newToken}`;

          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${newToken}`;

          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

