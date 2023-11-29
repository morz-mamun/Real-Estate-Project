import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";


const AddPropertyCart = ({property}) => {
  const {user} = useAuth()
    const {_id, agentImage, description, email, location, name, price, propertyImage, status, title} = property
    return (
        <div className="card bg-slate-200 col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                hover:scale-110 
                transition
              "
            src={propertyImage}
            alt="Property Pic"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          ></div>
        </div>
        <div className="flex justify-between items-center px-2">
          <div className="font-semibold md:text-lg">{title}</div>
          <div className="flex items-center gap-2">
            <h1 className="font-semibold md:text-lg">{name}</h1>
            <img className="rounded-full w-10 h-10" src={agentImage} alt="" />
          </div>
        </div>

        <div className="font-light text-neutral-500 px-2">{location}</div>
        <div className="flex justify-between items-center gap-1 p-2">
          <div className="font-semibold">Price Range: ${price}</div>
          <div className="font-bold text-green-600">{status}</div>
        </div>
        <div  className="flex justify-center pb-4 gap-3">
        <Link to={`/dashboard/update/${user?.email}/${_id}`}>
          <div>
            <button className="btn btn-sm md:btn-md btn-outline border-b-4 shadow-xl font-bold  border-red-600">
              Update
            </button>
          </div>
        </Link>
        <div>
            <button className="btn btn-sm md:btn-md btn-outline border-b-4 shadow-xl font-bold  border-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddPropertyCart;