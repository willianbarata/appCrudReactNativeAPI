import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://192.168.0.106:3000'
});

export default api;