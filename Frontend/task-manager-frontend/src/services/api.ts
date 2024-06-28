import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use .env
  // Set the InMemory User credentials to access the API due to Spring Authentication:
  auth: {
    username: 'user',
    password: 'password'
  }
});


export default api;
