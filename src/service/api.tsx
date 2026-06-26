import axios from "axios";
import { BASE_URL } from "./constants";

const API  = axios.create({
    baseURL: BASE_URL
});

API.interceptors.request.use((axiosConfig) => {
    axiosConfig.headers["User-Agent"] = "Pokemon App JDT-17 Exam";
    return axiosConfig;
})

export default API;