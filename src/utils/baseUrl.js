import axios from 'axios';

const baseURL = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    withCredentials: true 
})

export default baseURL