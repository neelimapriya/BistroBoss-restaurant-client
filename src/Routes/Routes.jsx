import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUser from "../Pages/Dashboard/AllUsers/AllUser";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItems/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
             path: "/",
             element:<Home></Home>
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'order/:category',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
      // normal user routes
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'history',
        element:<PaymentHistory></PaymentHistory>
      },
      // admin routes
      {
        path:'addItems',
        element:<AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path:'manageItem',
        element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path:'users',
        element:<AdminRoute><AllUser></AllUser></AdminRoute>
      }
    ]
  }
]);
