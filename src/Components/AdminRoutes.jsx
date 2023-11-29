import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineManageAccounts, MdRateReview } from "react-icons/md";
const AdminRoutes = () => {
    return (
        <div className="">
             <ul className="menu md:p-4 space-y-2">
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/adminProfile"}>
              <FaUserCircle className="text-white text-xs md:text-lg"></FaUserCircle>
              Admin Profile
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/manageProperties"}>
             <MdOutlineManageAccounts className="text-white text-xs md:text-lg"></MdOutlineManageAccounts>
              Manage Properties
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/manageUsers"}>
             <MdOutlineManageAccounts className="text-white text-xs md:text-lg"></MdOutlineManageAccounts>
              Manage Users
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/manageReviews"}>
             <MdRateReview className="text-white text-xs md:text-lg"></MdRateReview>
              Manage Reviews
            </NavLink>
          </li>
        </ul>
        </div>
    );
};

export default AdminRoutes;