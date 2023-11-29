/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const ReviewCart = ({ review, refetch }) => {
    const axiosPublic = useAxiosPublic()
  const {
    _id,
    propertyTitle,
    agentName,
    reviewTime,
    // reviewerEmail,
    reviewDescription,
  } = review;

  const handleDelete = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosPublic.delete(`/reviews/${_id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Review has been deleted.",
                        icon: "success"
                      });
                }
            })
        }
      });
  }
  return (
    <div className="card  bg-slate-600 bg-opacity-80 shadow-xl text-white ">
      <div className="card-body ">
        <h2 className="card-title">{propertyTitle}</h2>
        <p>Agent: {agentName}</p>
        <p>Review Time: {reviewTime}</p>
        <p>Description: {reviewDescription}</p>
        <div className="card-actions justify-center pt-5">
          <button onClick={handleDelete} className="btn btn-outline border-b-4 text-white border-red-600 font-bold hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
