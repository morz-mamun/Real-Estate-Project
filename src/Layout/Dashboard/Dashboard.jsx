import { NavLink, Outlet } from "react-router-dom";
import RoofingIcon from "@mui/icons-material/Roofing";
import AdminRoutes from "../../Components/AdminRoutes";


const Dashboard = () => {
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
        <AdminRoutes></AdminRoutes>
       
      </div>
      <div className="flex-1 px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
