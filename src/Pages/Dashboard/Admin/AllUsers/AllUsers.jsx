import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle";
import { GrUserAdmin } from "react-icons/gr";
import { MdDelete, MdRealEstateAgent } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // handle make admin
  const handleMakeAdmin = (user) => {
    const userInfo = { role: "admin" };
    axiosSecure.patch(`/users/admin/${user._id}`, userInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // handle make agent
  const handleMakeAgent = (user) => {
    const userInfo = { role: "agent" };
    axiosSecure.patch(`/users/admin/${user._id}`, userInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Agent now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //handle make fraud user 
  const handleFraud = (user) => {
    const userInfo = { role: "fraud" };
    axiosSecure.patch(`/users/admin/${user._id}`, userInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Fraud Agent`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  //handle delete user
  const handleDelete = (user) => {};
  return (
    <div>
      <SectionTitle heading={"Manage All users"}></SectionTitle>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div className="py-5">
          <h1 className="text-3xl font-bold uppercase">
            Total Users: {users.length}
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="space-x-2">
                    {user.role === "admin" && (
                      <span className="p-2 rounded-lg font-bold bg-[#94df6c]">Admin</span>
                    )}
                    {user.role === "agent" && (
                      <span className="p-2 rounded-lg font-bold bg-[#94df6c]">Agent</span>
                    )}
                    {user.role === "fraud" && (
                      <span className="p-2 rounded-lg font-bold bg-red-600 text-white">Fraud</span>
                    )}
                  </td>

                 { user.role === 'fraud' || 
                 <td>   
                      { user.role === 'admin' || 
                        <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-[#94df6c] btn-sm font-bold"
                      >
                        <GrUserAdmin></GrUserAdmin>
                        Make Admin
                      </button>
                      }
                    
                    {user.role === "agent" || (
                      <button
                        onClick={() => handleMakeAgent(user)}
                        className="btn bg-[#94df6c] btn-sm font-bold"
                      >
                        <MdRealEstateAgent></MdRealEstateAgent>
                        Make Agent
                      </button>
                    )}
                    <button
                      onClick={() => handleFraud(user)}
                      className="btn btn-sm bg-red-600 text-white hover:bg-black"
                    >
                      <FiUserX></FiUserX>
                      Fraud
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-sm bg-red-600 text-white"
                    >
                      <MdDelete></MdDelete>
                      Delete
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

export default AllUsers;
