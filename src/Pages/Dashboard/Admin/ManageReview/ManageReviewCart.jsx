import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageReviewCart = ({ review, refetch }) => {
  const {
    _id,
    propertyTitle,
    agentName,
    reviewTime,
    reviewerEmail,
    reviewDescription,
    reviewerName,
    ReviewerImage,
  } = review;

  const axiosSecure = useAxiosSecure();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reviews/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="card  bg-slate-600 bg-opacity-10 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Reviewer Name: {reviewerName}</h1>
          <img className="rounded-badge w-20 h-20" src={ReviewerImage} alt="" />
        </div>
        <div className="flex justify-between font-semibold">
        <h1>{propertyTitle}</h1>
        <h1>Agent Name: {agentName}</h1>
        </div>
        <h2 className="font-semibold">Reviewer Email: {reviewerEmail}</h2>
        <p>
          <span className="font-semibold">Review:</span> {reviewDescription}
        </p>
        <div className="flex justify-center pt-5">
          <button
            onClick={handleDelete}
            className="btn btn-outline border-b-4 border-red-600 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageReviewCart;
