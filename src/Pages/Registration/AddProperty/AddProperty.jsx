import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import bg from '../../../assets/addbg.jpg'

const AddProperty = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
    }
    return (
        <div className=" hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
        
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="bg-[#F3F3F3] md:p-12">
        <form className="md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
          
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
          </div>
          <div className="form-control w-full">
          <label className="label">
              <span className="label-text">Property Image*</span>
            </label>
            <input
            {...register("image", {required: true})}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex gap-6">
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
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
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
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] ... text-white ">
              Add Item
              <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
        </div>
    );
};

export default AddProperty;