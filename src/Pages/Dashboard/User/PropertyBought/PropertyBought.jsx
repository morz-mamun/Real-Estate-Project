import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Cover from "../../../../Shared/Cover/Cover";
import dashbg from '../../../../assets/dashbg.jpg'
import WishCart from "../Wishlist/WishCart";
import BoughtCart from "./BoughtCart";

const PropertyBought = () => {
    const axiosPublic = useAxiosPublic()
    const {data: propertyBought=[], refetch} = useQuery({
        queryKey: ['propertyBought'],
        queryFn: async () => {
            const res = await axiosPublic.get('/offeredProperty')
            return res.data
        }
    })

    console.log(propertyBought);
    return (
        <div>
             <Cover img={dashbg} title={'All Wished Property.'}></Cover>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {
               propertyBought?.map(property => <BoughtCart key={property._id} property={property} refetch={refetch}></BoughtCart>)
            }
          </div>
        </div>
    );
};

export default PropertyBought;