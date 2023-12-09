import { useForm } from "react-hook-form";
import { FaHouseUser } from "react-icons/fa";
import bg from "../../../assets/addbg.jpg";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUserRole from "../../../Hooks/useUserRole";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

// image upload in imgbb
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperty = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [allUser] = useUserRole();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageField = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_API, imageField, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      //now send the property data to the server with image url
      const property = {
        title: data.title,
        date: data.date,
        location: data.location,
        price: data.price,
        email: data.email,
        name: data.name,
        agentImage: data.agentImage,
        propertyImage: res.data.data.display_url,
        description: data.description
      };
      const propertyRes = await axiosSecure.post("/allProperty", property);
      if (propertyRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added to the All Property.`,
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate('dashboard/addAgentProperty')
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Something is wrong`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
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
            <span className="text-red-600">Add</span> Property
          </h3>
        </div>
        <form
          className="space-y-2 md:space-y-6 px-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Property Title*</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Property Title"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Property Location*</span>
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Property Location"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Price*</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Agent Name*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="User Role"
                readOnly
                defaultValue={allUser?.name}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Email*</span>
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Email"
                defaultValue={allUser?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Agent Image*</span>
              </label>
              <input
                type="text"
                {...register("agentImage", { required: true })}
                placeholder="Image"
                defaultValue={user?.photoURL}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-white">Description*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Description"
              required
              className="input input-bordered w-full"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-white">Property Image*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex items-center justify-center pb-2">
            <button
              className="btn btn-outline border-red-600 text-white font-bold hover:bg-red-600
            "
            >
              Add Property
              <FaHouseUser></FaHouseUser>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
