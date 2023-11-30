import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import contact from "../../../assets/contactus.png";
import { FaHouseUser } from "react-icons/fa";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <SectionTitle heading={"Knock Our Wall"}></SectionTitle>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img className="rounded-xl" src={contact} alt="" />
        </div>
        <div className=" bg-slate-200 rounded-xl md:w-1/2">
          <form
            className="space-y-2 md:space-y-6 px-2"
            //   onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-1 md:gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="font-bold">Enter Your Name</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  placeholder="Enter Your Name"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="font-bold">Email Address</span>
                </label>
                <input
                  type="email"
                  {...register("location", { required: true })}
                  placeholder="Email"
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Drop Message Details</span>
              </label>
              <input
                type="email"
                {...register("location", { required: true })}
                placeholder="Message"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex items-center justify-center pb-2">
              <button
                className="btn btn-outline border-red-600 font-bold font-bold hover:bg-red-600
            "
              >
                Add Property
                <FaHouseUser></FaHouseUser>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
