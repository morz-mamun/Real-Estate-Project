import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
    //Dashboard routes
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //admin routes
      {
        path: 'manageUsers',
        element: <AllUsers></AllUsers>
      }
    ],
  },
]);
