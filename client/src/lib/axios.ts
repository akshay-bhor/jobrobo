import axios, { AxiosError } from "axios";
import { getAuthorizationToken, getBearerToken } from "../util/auth";
const RequestController = new AbortController();

const connection = axios.create({
    baseURL: "/api",
    timeout: 60000,
});

connection.interceptors.request.use(
    (config) => {
        if (getAuthorizationToken() !== null) {
            config.headers.Authorization = getBearerToken();
        }
        config.signal = RequestController.signal;
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

connection.interceptors.response.use(
    (res) => {
        return res;
    },
    (err: AxiosError) => {
        const originalRequest = err.config;
        if (err.response?.status === 401) {
            // TODO
            return;
        }

        return Promise.reject(err);
    }
);
export default connection;
export { RequestController };
