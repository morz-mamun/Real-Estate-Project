import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

/* eslint-disable react/prop-types */
const BoughtCart = ({ property }) => {
  const { _id, location, title, propertyImage, agentName, offerAmount, status } =
    property;

    const {user} = useAuth()
   
  return (
    <div className="card bg-slate-200 col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full pb-5">
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
            <h1 className="font-semibold md:text-lg">{agentName}</h1>
          </div>
        </div>

        <div className="font-light text-neutral-500 px-2">{location}</div>
        <div className="flex justify-between items-center gap-1 p-2">
          <div className="font-semibold text-sm">
            Offered Amount: ${offerAmount}
          </div>
          {status === "accepted" && (
            <div className="font-bold text-green-600 uppercase">{status}</div>
          )}
          {status === "Bought" && (
            <div className="font-bold text-green-600 uppercase">{status}</div>
          )}
          {status === "rejected" && (
            <div className="font-bold text-red-600 uppercase ">{status}</div>
          )}
          {status === "pending" && <div className="uppercase">{status}</div>}
        </div>
        {status === "accepted" ? (
         <Link to={`payment/${user?.email}/${_id}`}>
          <div className="flex justify-center pb-5">
            <button className="btn btn-sm md:btn-md btn-outline border-b-4 border-red-600 hover:bg-green-600 uppercase">
              Pay
            </button>
          </div>
         </Link>
         
        ) : <span className="font-semibold">Transaction Id: { property.transactionId}</span>}
      </div>
    </div>
  );
};

export default BoughtCart;
