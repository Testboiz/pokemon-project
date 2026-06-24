import axios from "axios";

const API  = axios.create();

API.interceptors.request.use((axiosConfig) => {
    axiosConfig.baseURL = "https://pokeapi.co/v2/";
    return axiosConfig;
})

export default API;