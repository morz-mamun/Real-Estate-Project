import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";


const RequestedProperties = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: offeredProperty=[]} = useQuery({
        queryKey: ['offeredProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/offeredProperty?agentEmail=${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            {offeredProperty.length}
        </div>
    );
};

export default RequestedProperties;