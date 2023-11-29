import { useForm } from "react-hook-form";
import bg from "../../../../assets/banner3.jpg";
import Swal from "sweetalert2";
import { MdUpdate } from "react-icons/md";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

// image upload in imgbb
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProperty = () => {
  const { _id, title, location, name, status, email, price }=
    useLoaderData();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageField = { image: data.propertyImage[0] };
    const res = await axiosPublic.post(image_hosting_API, imageField, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const propertyInfo = {
        title: data.title,
        location: data.location,
        price: data.price,
        propertyImage: res.data.data.display_url,
      };

      const propertyUpdate = await axiosSecure.put(
        `/allProperty/${_id}`,
        propertyInfo
      );
      if (propertyUpdate.data.modifiedCount > 0) {
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is Updated by ${data.name} to the All Property.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      <div className="bg-black bg-opacity-60 md:p-12 rounded-lg">
        <div className="text-center mb-5">
          <h3 className="text-lg md:text-3xl font-bold uppercase border-b-4 border-red-600  py-3 text-white">
            <span className="text-red-600">Update</span> Property
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
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Agent Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Agent Name"
                readOnly
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Agent Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Agent Email"
                defaultValue={email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Price Range*</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder={price}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-white">Property Image*</span>
              </label>
              <input
                {...register("propertyImage", { required: true })}
                type="file"
                className="input input-bordered w-full cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            {status === "rejected" || (
              <button
                className="btn btn-outline border-red-600 text-white font-bold hover:bg-red-600
            "
              >
                Update
                <MdUpdate></MdUpdate>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
