import { useEffect } from 'react';
import axios from 'axios';
import config from '../../config';


const axiosSecure = axios.create({
    baseURL: `${config.SERVER_ADDRESS}`,
    withCredentials: true,
});
const useAxiosSecure = () => {


    useEffect(() => {

        axiosSecure.interceptors.request.use(
            (config) => {

                const token = localStorage.getItem('harvest_auth_token');
                if (token) {
                    config.headers['Authorization'] = token;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log('unauthorized')
                }
                return Promise.reject(error);
            }
        );
    }, []);

    return axiosSecure;
};

export default useAxiosSecure;