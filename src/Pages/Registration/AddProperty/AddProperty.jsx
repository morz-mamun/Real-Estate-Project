import { useForm } from "react-hook-form";
import { FaHouseUser } from "react-icons/fa";
import bg from "../../../assets/addbg.jpg";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// image upload in imgbb
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperty = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()


  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageField = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_API, imageField, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        //now send the property data to the server with image url
        const property = {
            title : data.title,
            date: data.date,
            location: data.location,
            price: data.price,
            image: res.data.data.display_url
        }
    const propertyRes = await axiosSecure.post('/allProperty', property)
        if(propertyRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is added to the All Property.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Something is wrong`,
                showConfirmButton: false,
                timer: 1500
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
      <div className="bg-[#F3F3F3] md:p-12">
        <div className="text-center mb-5">
          <h3 className="text-lg md:text-3xl font-bold uppercase border-b-4  py-3">
            Add Property
          </h3>
        </div>
        <form
          className="space-y-2 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Property Title*</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Property Title"
                required
                className="input input-bordered w-full"
              />
            </div>{" "}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date*</span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Property Title"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-1 md:gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Property Location*</span>
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Property Location"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Property Image*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] ... text-white ">
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
