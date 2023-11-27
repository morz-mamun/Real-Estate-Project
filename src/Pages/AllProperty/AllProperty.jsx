import { useQuery } from "@tanstack/react-query";
import Cover from "../../Shared/Cover/Cover";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PropertyCart from "../Registration/AddProperty/PropertyCart";
import coverBg from '../../assets/coverbg.jpg'
import SectionTitle from "../../Components/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllProperty = () => {
    const axiosSecure = useAxiosSecure()
    const {data: VerifiedProperties=[]} = useQuery({
        queryKey: ['verifiedProperties'],
        queryFn: async () => {
          const res = await axiosSecure.get('/verifiedProperty')
          return res.data
        }
      })
    return (
        <div>
           <Cover img={coverBg}></Cover>
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