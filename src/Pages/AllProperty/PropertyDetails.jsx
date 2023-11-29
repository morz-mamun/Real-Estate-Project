import SectionTitle from "../../Components/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import coverBg from "../../assets/coverbg.jpg";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";

import { useForm } from "react-hook-form";

const PropertyDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  // get time
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

 

  const {
    title,
    propertyImage,
    location,
    name,
    email,
    agentImage,
    price,
    description,
    status,
  } = useLoaderData();

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "Green",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmit = async (data) => {
    console.log(data);
    const reviewInfo = {
      propertyTitle: data.title,
      agentName: data.agentName,
      reviewTime: data.reviewTime,
      reviewerEmail: data.reviewerEmail,
      reviewDescription: data.reviewDescription
    }

    const reviewRes = await axiosPublic.post('/reviews', reviewInfo)
    if(reviewRes.data.insertedId){
      reset()
      Toast.fire({
        icon: "success",
        title: "Property add to Your Wishlist Successfully.",
      });
    }
    else{
      Toast.fire({
        icon: "error",
        title: "Something is Wrong!",
      });
    }
  };

  const handleWishlist = () => {
    const wishPropertyInfo = {
      userEmail: user.email,
      userName: user.displayName,
      propertyImage: propertyImage,
      title: title,
      location: location,
      agentName: name,
      agentEmail: email,
      agentImage: agentImage,
      status: status,
      price: price,
    };

    axiosPublic
      .post(`/wishlist`, wishPropertyInfo)
      .then((result) => {
        if (result.data.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Property add to Your Wishlist Successfully.",
          });
        }
      })
      .catch(() => {
        Toast.fire({
          icon: "error",
          title: "Something is Wrong!",
        });
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Cover img={coverBg} title={"Unlock Your Dream Home"}></Cover>
      <div>
        <SectionTitle heading={"Property Details"}></SectionTitle>
        <div className="flex flex-col lg:flex-row space-x-5 space-y-5">
          <div className="lg:w-1/2">
            <img className="w-full h-full" src={propertyImage} alt="" />
          </div>
          <div className="lg:w-1/2 space-y-3 px-1">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">{title} -- </h1>
              <div className="flex justify-between items-center space-x-2">
                <h1 className="font-semibold">{name}</h1>
                <img
                  className="rounded-box w-12 h-12 md:w-16 md:h-16"
                  src={agentImage}
                  alt=""
                />
              </div>
            </div>
            <p className="font-bold">Price Range: ${price}</p>
            <p>{location}</p>
            <p> Description: {description}</p>
            
            <div className="flex justify-center gap-5 pt-4">
            <button
                onClick={handleWishlist}
                className="btn btn-outline border-b-4 shadow-xl font-bold  border-red-600"
              >
                Add to wishlist
              </button>
            </div>

            <div className="flex justify-center gap-5 pt-4">
              <button
                className="btn btn-outline border-b-4 shadow-xl font-bold  border-red-600"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Review
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box bg-black bg-opacity-80 text-white">
                <form method="dialog" className="text-right">   
                     <button className="btn btn-circle btn-outline text-red-600 btn-sm font-bold"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                   </form>
                  <h3 className="text-center font-bold text-lg border-b-2 w-fit mx-auto border-red-600"><span className="text-red-600">User </span>Review</h3>
                 
                  <div className="modal-action">
                  
                    <form
                      className="space-y-2 md:space-y-6 px-2"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="flex gap-1 md:gap-6">
                        <div className="form-control w-full">
                          <label className="label">
                            <span className="">Property Title*</span>
                          </label>
                          <input
                            type="text"
                            {...register("title", { required: true })}
                            placeholder="Property Title"
                            defaultValue={title}
                            className="input text-black input-bordered w-full"
                          />
                        </div>
                        <div className="form-control w-full">
                          <label className="label">
                            <span className="">Agent Name</span>
                          </label>
                          <input
                            type="text"
                            {...register("agentName", { required: true })}
                            placeholder="Agent Name"
                            defaultValue={name}
                            className="input text-black input-bordered w-full"
                          />
                        </div>
                      </div>

                      <div className="flex gap-1 md:gap-6">
                        <div className="form-control w-full">
                          <label className="label">
                            <span className="">Review Time</span>
                          </label>
                          <input
                            type="text"
                            {...register("reviewTime", { required: true })}
                            placeholder="Time"
                            defaultValue={time}
                            className="input text-black input-bordered w-full"
                          />
                        </div>
                        <div className="form-control w-full">
                          <label className="label">
                            <span className="">Reviewer Email</span>
                          </label>
                          <input
                            type="text"
                            {...register("reviewerEmail", {
                              required: true,
                            })}
                            placeholder="Review Description"
                            defaultValue={user?.email}
                            className="input text-black  input-bordered w-full"
                          />
                        </div>
                      </div>
                      <div className="form-control w-full">
                          <label className="label">
                            <span className="">Description</span>
                          </label>
                          <textarea
                            type="text"
                            {...register("reviewDescription", {
                              required: true,
                            })}
                            placeholder="Review Description"
                            className="input text-black  input-bordered w-full"
                          />
                        </div>

                      <div className="flex items-center justify-center pb-2">
                        <button
                          className="btn btn-outline border-red-600 text-white font-bold hover:bg-red-600"
                        >
                          Add Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle heading={"Reviews"}></SectionTitle>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
