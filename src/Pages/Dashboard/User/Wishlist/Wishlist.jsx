import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const Wishlist = () => {
    const axiosPublic = useAxiosPublic()
    const {data: wishProperty=[]} = useQuery({
        queryKey: ['wishProperty'],
        queryFn: async() => {
            const res = await axiosPublic.get('/wishlist')
            return res.data
        }
    })
    return (
        <div>
            <h1>{wishProperty.length}</h1>
        </div>
    );
};

export default Wishlist;