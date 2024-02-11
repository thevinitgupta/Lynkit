import axios, { AxiosInstance } from "axios";

const authApi : AxiosInstance = axios.create({
    baseURL : `http://localhost:3003/auth`,
});

const dataApi : AxiosInstance = axios.create({
    baseURL : `http://localhost:3003`
});

dataApi.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("lynkit-user");
    config.withCredentials = true;
    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => Promise.reject(error));

export {authApi, dataApi};