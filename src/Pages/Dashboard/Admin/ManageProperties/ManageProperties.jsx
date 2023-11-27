import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { MdDelete, MdVerified } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
import Swal from "sweetalert2";

const ManageProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allProperties = [] } = useQuery({
    queryKey: ["allProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allProperty");
      return res.data;
    },
  });


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

  // handle verify by admin property
  const handleVerify = (property) => {
    const { _id, title, location, price, propertyImage, name, agentImage } =
      property;
    const propertyInfo = {
    //   propertyId: _id,
    //   propertyImage: propertyImage,
    //   title: title,
    //   location: location,
    //   agentName: name,
    //   agentImage: agentImage,
      status: "Verified",
    //   price: price,
    };

    axiosSecure
      .patch(`/allProperty/verified/${_id}`, propertyInfo)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          Toast.fire({
            icon: "success",
            title: "Property Verified Successfully by Admin.",
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

  const handleReject = (property) => {};
  return (
    <div>
      <SectionTitle heading={"Manage All users"}></SectionTitle>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div className="py-5">
          <h1 className="text-3xl font-bold uppercase">
            Total Users: {allProperties.length}
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Location</th>
                <th>Agent Name</th>
                <th>Agent Email</th>
                <th>Price Range</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allProperties?.map((property, index) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>{property.name}</td>
                  <td>{property.location}</td>
                  <td>{property.name}</td>
                  <td>{property.email}</td>
                  <td>${property.price}</td>

                  {/* <td className="space-x-2">
                    {user.role === "admin" && (
                      <span className="p-2 rounded-lg font-bold bg-[#94df6c]">Admin</span>
                    )}
                    {user.role === "agent" && (
                      <span className="p-2 rounded-lg font-bold bg-[#94df6c]">Agent</span>
                    )}
                    {user.role === "fraud" && (
                      <span className="p-2 rounded-lg font-bold bg-red-600 text-white">Fraud</span>
                    )}
                  </td>  */}

                  <td className="space-y-4">
                   {  <button
                      onClick={() => handleVerify(property)}
                      className="btn bg-[#94df6c] btn-sm font-bold"
                    >
                      Verify
                    </button>}
                    <button
                      onClick={() => handleReject(property)}
                      className="btn btn-sm bg-red-600 text-white"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProperties;
