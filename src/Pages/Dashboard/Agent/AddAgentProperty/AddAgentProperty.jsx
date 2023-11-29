import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Cover from "../../../../Shared/Cover/Cover";
import coverbg from '../../../../assets/banner3.jpg'
import AddPropertyCart from "./AddPropertyCart";
import SectionTitle from "../../../../Components/SectionTitle";
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
        <div className="">
          <SectionTitle heading={"My Added Properties"}></SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
            {
                allAddProperty?.map(property => <AddPropertyCart key={property._id} property={property}></AddPropertyCart> ) 
            }
           </div>
        </div>
    );
};

export default AddAgentProperty;