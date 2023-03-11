import axios from 'axios';
import config from '../config/config';

const axiosInstance = axios.create({
	baseURL: config.API_ROOT,
});

export default axiosInstance;
