import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jp3-apartments-redux.firebaseio.com'
});

export default axiosInstance;