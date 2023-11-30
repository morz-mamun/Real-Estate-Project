import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import SectionTitle from "../../../../Components/SectionTitle";
import Swal from "sweetalert2";


const RequestedProperties = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: requestedProperty=[], refetch} = useQuery({
        queryKey: ['offeredProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/offeredProperty?agentEmail=${user?.email}`)
            return res.data
        }
    })


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
  const handleAccept = (property) => {
    const { _id } = property;
    const propertyInfo = {
      status: "accepted",
    };

    axiosSecure
      .patch(`/offeredProperty/${_id}`, propertyInfo)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          refetch()
          Toast.fire({
            icon: "success",
            title: "Property Accept Successfully by Agent.",
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

  const handleReject = (property) => {
    const { _id } = property;
    const propertyInfo = {
      status: "rejected",
    };

    axiosSecure
      .patch(`/offeredProperty/${_id}`, propertyInfo)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          refetch()
          Toast.fire({
            icon: "success",
            title: "Property Reject by Agent.",
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
        <div className="">
      <SectionTitle heading={"Offered Properties"}></SectionTitle>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div className="py-5">
          <h1 className="text-3xl font-bold uppercase">
            Total Offered Property: {requestedProperty?.length}
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
                <th>Buyer Email</th>
                <th>Buyer Name</th>
                <th>Offered Price</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {requestedProperty?.map((property, index) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>{property.title}</td>
                  <td>{property.location}</td>
                  <td>{property.buyerEmail}</td>
                  <td>{property.buyerName}</td>
                  <td>{property.offerAmount}</td>
                  <td className="uppercase">{property.status}</td>
                  { property?.status === 'accepted' || property?.status === 'rejected' || property?.status === 'Bought' ||
                    <td className="space-y-4">
                     <button
                      onClick={() => handleAccept(property)}
                      className="btn bg-[#94df6c] btn-sm font-bold"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(property)}
                      className="btn btn-sm bg-red-600 text-white"
                    >
                      Reject
                    </button>
                  </td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default RequestedProperties;