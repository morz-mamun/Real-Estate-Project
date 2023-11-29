import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageReviewCart from "./ManageReviewCart";
import SectionTitle from "../../../../Components/SectionTitle";

const ManageReview = () => {
    const axiosSecure = useAxiosSecure()
    const {data: allReview =[], refetch} = useQuery({
        queryKey: ['allReview'],
        queryFn: async() => {
            const res = await axiosSecure.get('/reviews')
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle heading={'Manage All Review.'}></SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                allReview?.map(review => <ManageReviewCart key={review._id} review={review} refetch={refetch}></ManageReviewCart>)
            }
           </div>
        </div>
    );
};

export default ManageReview;