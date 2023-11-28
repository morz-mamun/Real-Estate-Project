import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdAddBusiness, MdOutlineRequestQuote} from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";

const AgentRoutes = () => {
    return (
        <div>
            <ul className="menu p-4 space-y-2">
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/agentProfile"}>
              <FaUserCircle className="text-white text-lg"></FaUserCircle>
              Agent Profile
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/abc"}>
             <MdAddBusiness className="text-white text-lg"></MdAddBusiness>
            My Added Properties
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/soldProperties"}>
             <BiSolidBank className="text-white text-lg"></BiSolidBank>
              My sold Properties
            </NavLink>
          </li>
          <li className="uppercase text-white font-bold">
            <NavLink to={"/dashboard/requestedProperties"}>
             <MdOutlineRequestQuote className="text-white text-lg"></MdOutlineRequestQuote>
              Requested Properties
            </NavLink>
          </li>
        </ul>  
        </div>
    );
};

export default AgentRoutes;