import axios, {AxiosInstance} from "axios";

export function getApiClientAxios(): AxiosInstance {
    const token = localStorage.getItem('amalteia:token');

    const api = axios.create({
        baseURL: `https://imobeflexbackend.herokuapp.com/`,
    });

    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    return api;
}
