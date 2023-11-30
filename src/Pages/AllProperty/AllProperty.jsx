import { useQuery } from "@tanstack/react-query";
import Cover from "../../Shared/Cover/Cover";

import PropertyCart from "../Registration/AddProperty/PropertyCart";
import coverBg from '../../assets/coverbg.jpg'
import SectionTitle from "../../Components/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllProperty = () => {
    const axiosSecure = useAxiosSecure()
    const {data: VerifiedProperties=[]} = useQuery({
        queryKey: ['verifiedProperties'],
        queryFn: async () => {
          const res = await axiosSecure.get('/allProperty/status')
          return res.data
        }
      })
    return (
        <div className="max-w-7xl mx-auto">
           <Cover img={coverBg} title={'Unlock Your Dream Home'} description={'Where Dreams Find a Home, and Homes Become Dreams. Explore Possibilities Beyond Walls.'}></Cover>
           <SectionTitle heading={'All Properties'}></SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                VerifiedProperties.map(property => <PropertyCart key={property._id} property={property}></PropertyCart>)
            }
           </div>

        </div>
    );
};

export default AllProperty;