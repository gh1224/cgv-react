import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cgv-clone.herokuapp.com',
    withCredentials: true
});

export default instance;