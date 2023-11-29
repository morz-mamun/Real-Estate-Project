import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";
import SectionTitle from "../../../../Components/SectionTitle";
import ReviewCart from "./ReviewCart";


const MyReview = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: reviews=[]} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews/${user?.email}`)
            return res.data
        }
    }) 
    return (
        <div>
            <SectionTitle heading={"My Reviews"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews?.map(review => <ReviewCart key={review._id} review={review}></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default MyReview;