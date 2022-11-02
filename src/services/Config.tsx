import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const ServerAccount = axios.create({ baseURL });

ServerAccount.interceptors.request.use();

export { ServerAccount };
