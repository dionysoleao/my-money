import axios from 'axios';
export const api = axios.create({
    baseURL: 'https://elastic-goldstine-1158fe.netlify.app/api/'
})