import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import BoughtCart from "./BoughtCart";
import SectionTitle from "../../../../Components/SectionTitle";
import useAuth from "../../../../Hooks/useAuth";


const PropertyBought = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {data: propertyBought=[], refetch} = useQuery({
        queryKey: ['propertyBought'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/offeredProperty/${user?.email}`)
            return res.data
        }
    })

    console.log(propertyBought);
    return (
        <div className="">
            <SectionTitle heading={'All Bought Property'}></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {
               propertyBought?.map(property => <BoughtCart key={property._id} property={property} refetch={refetch}></BoughtCart>)
            }
          </div>
        </div>
    );
};

export default PropertyBought;