import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Components/SectionTitle";

const LatestReview = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allReview = [], refetch } = useQuery({
    queryKey: ["allReview"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  const reviews = allReview?.slice(0, 3)
  console.log(reviews);
  return (
    <div className="max-w-7xl mx-auto">
        <SectionTitle heading={"Latest Reviews"}></SectionTitle>
      <Marquee pauseOnHover={true} className="mb-16 mt-10" > 
        <div className="flex gap-5 ml-5">
            {
                reviews?.map(review => <div key={review._id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <img className="rounded-full w-32" src={review.ReviewerImage} alt="" />
                 
                 <div className="flex">
                 <p className="font-semibold">Name: {review.reviewerName}</p>
                 <h2 className="card-title">{review.propertyTitle}</h2>
                 </div>
                <p>description:{review.reviewDescription} </p>
                </div>
              </div>)
            }
        </div>
      </Marquee>
    </div>
  );
};

export default LatestReview;
