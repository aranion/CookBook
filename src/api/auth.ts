import axios from 'axios'
import { AuthResponse } from 'models/AuthResponse';
import { API_BASE_URL } from "../constants/config"

const BASE_URL = process.env.API_URL || API_BASE_URL

console.log("$auth BASE_URL", BASE_URL)
export const $auth = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
});

$auth.interceptors.request.use((config) => {
    config.headers = {
        Authorization: "Bearer " + localStorage.getItem("token")
    };
    return config;
});

$auth.interceptors.response.use(function (response) {
    return response;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $auth.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})