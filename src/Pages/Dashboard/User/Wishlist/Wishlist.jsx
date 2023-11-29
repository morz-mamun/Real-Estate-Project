import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import WishCart from "./WishCart";
import Cover from "../../../../Shared/Cover/Cover";
import dashbg from '../../../../assets/dashbg.jpg'
import SectionTitle from "../../../../Components/SectionTitle";

const Wishlist = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: wishProperty= [], refetch} = useQuery({
        queryKey: ['wishProperty'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/wishlist/${user?.email}`)
            return res.data
        }
    })
    console.log(wishProperty);
    return (
        <div>
          {/* <Cover img={dashbg} title={'All Wished Property.'}></Cover> */}
          <SectionTitle heading={'All Wished Property.'}></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {
               wishProperty?.map(property => <WishCart key={property._id} property={property} refetch={refetch}></WishCart>)
            }
          </div>
        </div>
    );
};

export default Wishlist;