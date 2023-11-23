import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaQuoteRight,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  return (
    <div>
      {/* <Navigation ></Navigation> */}
      <div className="flex ">
        {/* dashboard sidebar */}
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu">
            {isAdmin ? (
              <>
                <li className="p-4">
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>

                <li className="p-4">
                  <NavLink to="/dashboard/manageItem">
                    <FaList></FaList> Manage Items
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink to="/dashboard/bookings">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li className="p-4">
                  <NavLink to="/dashboard/users">
                    <FaUser></FaUser> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* shared navlinks */}
                <div className="divider"></div>
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
                  <NavLink to="/dashboard/history">
                    <FaList></FaList> Payment history
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li className="p-4">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/order/salad">
                <FaSearch></FaSearch> Menu
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/order/contact">
                <FaEnvelope></FaEnvelope> Contact
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
