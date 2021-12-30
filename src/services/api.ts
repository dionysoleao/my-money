import axios from 'axios';
export const api = axios.create({
    baseURL: 'https://mymoneyflow.netlify.app/api/'
})