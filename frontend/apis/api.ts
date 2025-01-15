import axios, {AxiosInstance} from 'axios';
const baseURL: string = 'http://localhost:3000/api/';

const AXIOS: AxiosInstance  = axios.create({
    baseURL: baseURL,
});
export default AXIOS;
