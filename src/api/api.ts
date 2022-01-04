import axios from 'axios'
// import { AuthResponse } from 'models/AuthResponse';
import { API_BASE_URL } from "../constants/config"

const BASE_URL = process.env.API_URL || API_BASE_URL

console.log("BASE_URL", BASE_URL)
export const $api = axios.create({
    baseURL: BASE_URL
});

$api.interceptors.request.use((config) => {
    return config;
});

$api.interceptors.response.use(function (response) {
    return response;
})