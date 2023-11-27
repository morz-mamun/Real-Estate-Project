import { useQuery } from "@tanstack/react-query";
import Cover from "../../Shared/Cover/Cover";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllProperty = () => {
    const axiosPublic = useAxiosPublic()

    const {data: allProperty=[]} = useQuery({
        queryKey: ['allProperty'],
        queryFn: async() => {
            const res = await axiosPublic.get('/allProperty')
            return res.data
        }
    })
    console.log(allProperty);
    return (
        <div>
           <Cover title={allProperty.length}></Cover>

        </div>
    );
};

export default AllProperty;