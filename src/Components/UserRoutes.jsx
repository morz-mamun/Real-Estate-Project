import { NavLink } from "react-router-dom";
import { FaHome, FaListUl, FaUserCircle } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

const UserRoutes = () => {
    return (
        <div>
            <ul className="menu p-4 space-y-2">
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/userProfile"}>
              <FaUserCircle className="text-white text-lg"></FaUserCircle>
              My Profile
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/wishlist"}>
             <FaListUl className="text-white text-lg"></FaListUl>
              Wishlist
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/propertyBought"}>
             <FaHome className="text-white text-lg"></FaHome>
              Property Bought
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/UserReviews"}>
             <MdRateReview className="text-white text-lg"></MdRateReview>
              My Reviews
            </NavLink>
          </li>
        </ul> 
        </div>
    );
};

export default UserRoutes;