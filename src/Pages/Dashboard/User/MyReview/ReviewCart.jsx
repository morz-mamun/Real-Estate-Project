const ReviewCart = ({ review }) => {
  const {
    propertyTitle,
    agentName,
    reviewTime,
    reviewerEmail,
    reviewDescription,
  } = review;
  return (
    <div className="card  bg-slate-600 bg-opacity-80 shadow-xl text-white ">
      <div className="card-body ">
        <h2 className="card-title">{propertyTitle}</h2>
        <p>Agent: {agentName}</p>
        <p>Review Time: {reviewTime}</p>
        <p>Description: {reviewTime}</p>
        <div className="card-actions justify-center pt-5">
          <button className="btn btn-outline border-b-4 text-white border-red-600 font-bold hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
