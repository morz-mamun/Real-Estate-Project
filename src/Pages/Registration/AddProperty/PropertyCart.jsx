import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PropertyCart = ({ property }) => {
  const {user} = useAuth()
  const {
    _id,
    propertyImage,
    title,
    location,
    agentName,
    agentImage,
    status,
    price,
  } = property;
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
          <div className="font-semibold text-lg">{title}</div>
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-lg">{agentName}</h1>
            <img className="rounded-full w-10 h-10" src={agentImage} alt="" />
          </div>
        </div>

        <div className="font-light text-neutral-500 px-2">{location}</div>
        <div className="flex justify-between items-center gap-1 p-2">
          <div className="font-semibold">Price Range: ${price}</div>
          <div className="font-bold text-green-600">{status}</div>
        </div>
        <Link to={`/propertyDetails/${_id}`}>
          <div className="flex justify-center pb-4">
            <button className="btn btn-outline border-b-4 shadow-xl font-bold  border-red-600">
              Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCart;
