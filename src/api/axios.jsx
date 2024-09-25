import axios from 'axios';
const BASE_URL = 'https://revi-travel-backend.onrender.com/'

export default axios.create({
    baseURL: BASE_URL
});

export const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});