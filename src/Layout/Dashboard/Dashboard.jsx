import { NavLink, Outlet } from "react-router-dom";
import RoofingIcon from "@mui/icons-material/Roofing";
import AdminRoutes from "../../Components/AdminRoutes";
import { FaAddressCard, FaHome } from "react-icons/fa";
import AgentRoutes from "../../Components/AgentRoutes";
import UserRoutes from "../../Components/UserRoutes";
import useUserRole from "../../Hooks/useUserRole";

const Dashboard = () => {
const [allUser] = useUserRole()
  return (
    <div className="flex">
      <div className="w-72 min-h-screen text-center py-5 bg-slate-600">
        <div>
          <p className="btn btn-ghost md:text-xl uppercase text-white">
            <span className="text-[#5afc03]">Mor</span>ZE
          </p>
          <RoofingIcon style={{ color: "#5afc03", fontSize: 30 }}></RoofingIcon>
        </div>
        {/* admin routes */}

        {allUser?.role === "admin" && <AdminRoutes></AdminRoutes>}
        
       
        {/* agent routes */}
        {allUser?.role === "agent" && <AgentRoutes></AgentRoutes>}
        
        {/* normal user role */}
        { allUser?.role === 'admin' || allUser?.role === 'agent' ? '' : <UserRoutes></UserRoutes>}
        <div className="border-b-2"></div>
        <ul className="menu p-4 space-y-2">
          <li className="uppercase text-white font-bold">
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/ourOrder/contact"}>
              <FaAddressCard></FaAddressCard>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
