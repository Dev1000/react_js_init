import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(
  config => {
    const jwt = JSON.parse(localStorage.getItem('jwt'))

    if (jwt) {
      config.headers.Authorization = jwt
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Handle global error responses here
    return Promise.reject(error);
  }
)

export default api