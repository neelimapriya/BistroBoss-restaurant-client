import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navigation = () => {
  const {user, logOut}=useContext(AuthContext)
  const handleLogout =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  const navlink = (
    <>

      <li >
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='menu'>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      
     
    { user? <><li>
        <NavLink to="/login">Login</NavLink>
      </li></>:<><button onClick={handleLogout} className="btn btn-ghost">Logout</button></>}
      
    </>
  );
  return (
    <div>
      <div className="navbar fixed  z-10 bg-opacity-50 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navlink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
