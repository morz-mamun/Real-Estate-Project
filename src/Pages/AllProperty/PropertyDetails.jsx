import SectionTitle from "../../Components/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import coverBg from "../../assets/coverbg.jpg";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const PropertyDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    _id,
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
            <div className="flex justify-center pt-4">
              <button
                onClick={() => handleWishlist(_id)}
                className="btn btn-outline border-b-4 shadow-xl font-bold  border-red-600"
              >
                Add to wishlist
              </button>
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
