import axios from 'axios'

const instance = axios.create({
  //   baseURL: 'https://your-api-url.com', // Replace with your API base URL
  timeout: 10000, // Adjust the timeout as needed
})

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken') // Assuming you store the token in localStorage
    if (accessToken) {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
      config.headers = headers
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    console.log('myconfig error in response')
    console.log(error)

    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        // Call an API to refresh the token using the refresh token
        const refreshToken = localStorage.getItem('refreshToken')
        const refreshResponse = await axios.get(
          `https://api.p360.build:9003/v1/user/getLatestAccessToken/${refreshToken}`
        )

        console.log(refreshResponse)

        // Update the token in localStorage
        localStorage.setItem('accessToken', refreshResponse.data.token)

        // Retry the original request with the updated token
        originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.token}`
        return axios(originalRequest)
      } catch (refreshError) {
        // Handle token refresh error (e.g., log out the user)
        console.error('Token refresh failed:', refreshError)
        // You may want to log the user out or handle the error in a different way
      }
    }
    return Promise.reject(error)
  }
)

export default instance
