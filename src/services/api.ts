import axios, { AxiosResponse } from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.1.68:8080/api/'
});