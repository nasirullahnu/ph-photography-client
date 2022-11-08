import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItem = (
    <>
    <li>
      <Link className="font-semibold" to="/">
        Home
      </Link>
    </li>


    {/* {user?.email ? (
      <li>
        <Link className="font-semibold" to="/orders">
          See Orders
        </Link>
        <Link className="font-semibold" to="/">
          Log Out
        </Link>
      </li>
    ) : (
      <li>
        <Link className="font-semibold" to="/login">
          Login
        </Link>
      </li>
    )} */}



    <li>
      <Link className="font-semibold" to="/">
        user?.email
      </Link>
    </li>
  </>
  );

  return (
    <div>
      <div className="navbar bg-blue-700 mb-12 mt-12 h-12">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            {/* <img src={logo} alt="" /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">Appoinment</button>
        </div>
      </div>
    </div>
  );
};

export default Header;