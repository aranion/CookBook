import axios from 'axios'
import { API_BASE_URL } from "../constants/config"

export const $api = axios.create({
    baseURL: API_BASE_URL
});

$api.interceptors.request.use((config) => {
    return config;
});

$api.interceptors.response.use(function (response) {
    return response;
});