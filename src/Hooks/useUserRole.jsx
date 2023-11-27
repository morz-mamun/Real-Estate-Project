import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserRole = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data:allUser , isPending} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data
        }
    })
    return [allUser, isPending]
};

export default useUserRole;