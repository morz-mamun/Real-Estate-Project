import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const PropertyBought = () => {
    const axiosPublic = useAxiosPublic()
    const {data: propertyBought=[]} = useQuery({
        queryKey: ['propertyBought'],
        queryFn: async () => {
            const res = await axiosPublic.get('/offeredProperty')
            return res.data
        }
    })

    console.log(propertyBought);
    return (
        <div>
            this is page
        </div>
    );
};

export default PropertyBought;