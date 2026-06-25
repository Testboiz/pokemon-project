import axios from "axios";

const API  = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

API.interceptors.request.use((axiosConfig) => {
    axiosConfig.headers["User-Agent"] = "Pokemon App JDT-17 Exam";
    return axiosConfig;
})

export default API;