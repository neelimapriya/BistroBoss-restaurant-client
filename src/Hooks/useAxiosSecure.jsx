import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const AxiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-six-iota.vercel.app",
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // request interceptor to add authorization header for every secure call to teh api
    AxiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')

        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
    
        return Promise.reject(error);
    });


    AxiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })


    return AxiosSecure;
};

export default useAxiosSecure;
