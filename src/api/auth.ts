import axios from 'axios'
import { API_BASE_URL } from "../constants/config"

export const $apiAuth = axios.create({
    withCredentials: true,
    baseURL: API_BASE_URL
});

$apiAuth.interceptors.request.use((config) => {
    config.headers = {
        Authorization: "Bearer " + localStorage.getItem("token")
    };
    return config;
});

$apiAuth.interceptors.response.use(function (response) {
    return response;
});