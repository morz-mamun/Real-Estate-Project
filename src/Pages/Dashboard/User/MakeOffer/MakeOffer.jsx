import Swal from "sweetalert2";
import bg from "../../../../assets/banner3.jpg";
import { useForm } from "react-hook-form";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const MakeOffer = () => {
  const [{ title, location, agentName, price, userEmail, agentEmail
,    userName , propertyImage}] =
    useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const property = {
      title: data.title,
      buyingDate: data.buyingDate,
      location: data.location,
      offerAmount: data.offeredAmount,
      agentName: data.agentName,
      agentEmail: data.agentEmail,
      buyerEmail: data.buyerEmail,
      buyerName: data.buyerName,
      propertyImage: data.propertyImage,
      status: "pending",
    };

    console.log(property);
    const propertyRes = await axiosPublic.post("/offeredProperty", property);
    if (propertyRes.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.title} is added to the All Property.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      className=" hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      <div className="bg-black bg-opacity-60 md:p-12 rounded-lg">
        <div className="text-center mb-5">
          <h3 className="text-lg md:text-3xl font-bold uppercase border-b-4 border-red-600  py-3 text-white">
            <span className="text-red-600">Make</span> Offer
          </h3>
        </div>
        <form
          className="space-y-2 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Property Title</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Property Title"
                defaultValue={title}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Property Location</span>
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Property Location"
                defaultValue={location}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Agent Name*</span>
              </label>
              <input
                type="text"
                {...register("agentName", { required: true })}
                placeholder="Agent Name"
                readOnly
                defaultValue={agentName}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Agent Email*</span>
              </label>
              <input
                type="text"
                {...register("agentEmail", { required: true })}
                placeholder='Agent Email'
                defaultValue={agentEmail}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
           
          </div>
          <div className="flex gap-1 md:gap-6">
          <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Buying Date*</span>
              </label>
              <input
                type="date"
                {...register("buyingDate", { required: true })}
                placeholder="Image"
                defaultValue=""
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Property Image*</span>
              </label>
              <input
                {...register("propertyImage", { required: true })}
                type="text"
                defaultValue={propertyImage}
                readOnly
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Buyer Email*</span>
              </label>
              <input
                type="text"
                {...register("buyerEmail", { required: true })}
                placeholder="Email"
                defaultValue={userEmail}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Buyer Name*</span>
              </label>
              <input
                type="text"
                {...register("buyerName", { required: true })}
                placeholder="Image"
                defaultValue={userName}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>
         
          <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Offered Amount*</span>
              </label>
              <input
                type="text"
                {...register("offeredAmount", { required: true })}
                placeholder={`${price} input amount between price range.`}
                className="input input-bordered w-full"
              />
            </div>
          <div className="flex items-center justify-center">
            <button
              className="btn btn-outline border-red-600 text-white font-bold hover:bg-red-600
            "
            >
              Offer
              <MdOutlineLocalOffer></MdOutlineLocalOffer>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeOffer;
