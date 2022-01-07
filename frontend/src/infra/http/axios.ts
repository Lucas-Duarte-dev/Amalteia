import axios, {AxiosInstance} from "axios";

export function getApiClientAxios(): AxiosInstance {
    const token = localStorage.getItem('amalteia:token');

    const api = axios.create({
        baseURL: `http://localhost:3333`,
    });

    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    return api;
}
