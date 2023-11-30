import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://y-one-eta.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;