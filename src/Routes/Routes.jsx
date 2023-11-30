import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AddProperty from "../Pages/Registration/AddProperty/AddProperty";
import AllProperty from "../Pages/AllProperty/AllProperty";
import AdminRoute from "./AdminRoute";
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties/ManageProperties";
import PropertyDetails from "../Pages/AllProperty/PropertyDetails";
import Wishlist from "../Pages/Dashboard/User/Wishlist/Wishlist";
import MakeOffer from "../Pages/Dashboard/User/MakeOffer/MakeOffer";
import PropertyBought from "../Pages/Dashboard/User/PropertyBought/PropertyBought";
import MyReview from "../Pages/Dashboard/User/MyReview/MyReview";
import MyProfile from "../Pages/Dashboard/User/MyProfle/MyProfile";
import Error from "../Pages/Error/Error";
import AgentProfile from "../Pages/Dashboard/Agent/AgentProfile/AgentProfile";
import RequestedProperties from "../Pages/Dashboard/Agent/RequestedProperties/RequestedProperties";
import SoldProperties from "../Pages/Dashboard/Agent/SoldProperties/SoldProperties";
import AddAgentProperty from "../Pages/Dashboard/Agent/AddAgentProperty/AddAgentProperty";
import UpdateProperty from "../Pages/Dashboard/Agent/UpdateProperty/UpdateProperty";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageReview from "../Pages/Dashboard/Admin/manageReview/ManageReview";
import Payment from "../Pages/Dashboard/User/Payment/Payment";


export const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error></Error>,
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
      {
        path: '/addProperty',
        element: <PrivateRoute><AddProperty></AddProperty></PrivateRoute>
      },
      {
        path: '/allProperty',
        element: <PrivateRoute><AllProperty></AllProperty></PrivateRoute>
      },
      {
        path: '/propertyDetails/:id',
        element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/allProperty/${params.id}`)
      },
      
    ],
  },
    //Dashboard routes
  {
    path: "dashboard",
    // errorElement: <Error></Error>,
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //admin routes
      {
        path: "adminProfile",
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'manageProperties',
        element: <AdminRoute><ManageProperties></ManageProperties></AdminRoute>
      },
      {
        path: 'manageReviews',
        element: <AdminRoute><ManageReview></ManageReview></AdminRoute>
      },

      // Agent routes => 
      {
        path: 'agentProfile',
        element: <PrivateRoute><AgentProfile></AgentProfile></PrivateRoute>
      },
      {
       path: 'addAgentProperty',
       element: <AddAgentProperty></AddAgentProperty>
      },
      {
        path: 'update/:id',
        element: <UpdateProperty></UpdateProperty>,
        loader: ({params}) => fetch(`http://localhost:5000/allProperty/${params.id}`)
      },
      {
        path: 'soldProperties',
        element: <SoldProperties></SoldProperties>
      },
      {
        path: 'requestedProperties',
        element: <RequestedProperties></RequestedProperties>
      },


      // user routes
      {
        path: 'userProfile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: 'wishlist',
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path: 'makeOffer/:email/:id',
        element: <PrivateRoute><MakeOffer></MakeOffer></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/wishlist/${params.email}/${params.id}`)
      },
      {
        path: 'propertyBought',
        element: <PrivateRoute><PropertyBought></PropertyBought></PrivateRoute>
      },
      {
        path: 'UserReviews',
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: 'propertyBought/payment/:email/:id',
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/offeredProperty/${params.email}/${params.id}`)
      }
      
    ],
  },
]);
