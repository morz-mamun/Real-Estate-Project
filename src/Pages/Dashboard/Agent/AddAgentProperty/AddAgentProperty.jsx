import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddAgentProperty = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: allAddProperty} = useQuery({
        queryKey: ['allAddProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allProperty/${user?.email}`)
            return res.data
        }
    })
console.log(allAddProperty);
    return (
        <div>
            {allAddProperty?.length}
        </div>
    );
};

export default AddAgentProperty;