import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../Pages/Shared/Navbar/Navigation";
import {
  FaCalendar,
  FaHome,
  FaList,
  FaQuoteRight,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart]=useCart()
  return (
    <div>
      {/* <Navigation ></Navigation> */}
      <div className="flex ">
        {/* dashboard sidebar */}
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu">
            <li className="p-4">
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar> Reservation
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart> My Cart ({cart?.length})
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/dashboard/review">
                <FaQuoteRight></FaQuoteRight>Add Review
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/dashboard/bookings">
                <FaList></FaList> My Bookings
              </NavLink>
            </li>
            <div className="divider"></div>
            <li className="p-4">
              <NavLink to="/">
                <FaHome></FaHome>  Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/order/salad">
                <FaSearch></FaSearch>  Menu
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
