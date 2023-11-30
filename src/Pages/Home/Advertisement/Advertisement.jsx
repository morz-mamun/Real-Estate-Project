import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import PropertyCart from "../../Registration/AddProperty/PropertyCart";

const Advertisement = () => {
  const axiosSecure = useAxiosSecure()
  const {data: VerifiedProperties=[]} = useQuery({
      queryKey: ['verifiedProperties'],
      queryFn: async () => {
        const res = await axiosSecure.get('/allProperty/status')
        return res.data
      }
    })

  const adProperty = VerifiedProperties?.slice(0, 4);
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <SectionTitle heading={'Properties For You.'}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          adProperty?.map(property => <PropertyCart key={property._id} property={property}></PropertyCart>)
        }
      </div>
    </div>
  );
};

export default Advertisement;
