import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle";


const SoldProperties = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data : soldProperty=[]} = useQuery({
        queryKey: ['soldProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/offeredProperty?agentEmail=${user?.email}&status=Bought`)
            return res.data
        }
    })
    return (
        <div className="">
      <SectionTitle heading={"All Sold Property"}></SectionTitle>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div className="py-5">
          <h1 className="text-3xl font-bold uppercase">
            Total Sold Property: {soldProperty?.length}
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Location</th>
                <th>Buyer Email</th>
                <th>Buyer Name</th>
                <th>Offered Price</th>
              </tr>
            </thead>
            <tbody>
              {soldProperty?.map((property, index) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>{property.title}</td>
                  <td>{property.location}</td>
                  <td>{property.buyerEmail}</td>
                  <td>{property.buyerName}</td>
                  <td>{property.offerAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default SoldProperties;