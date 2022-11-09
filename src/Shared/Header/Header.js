import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
}

  const navButtons = (
    <>
    <li>
      <Link className="font-semibold" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="font-semibold" to="/">
        Blog
      </Link>
    </li>
    {
      user?.uid?
      <li>
      <Link className="font-semibold" to="/">
        My Reviews
      </Link>
      <Link className="font-semibold" to="/">
        Add Services
      </Link>
    </li>
    :
    <li>
      <Link className="font-semibold" to="/login">
        Login
      </Link>
    </li>
    }
  </>
  );

  return (
    <div>
      <div className="navbar bg-blue-700 mb-10 mt-10 h-10">
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
              {navButtons}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            {/* <img src={logo} alt="" /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navButtons}</ul>
        </div>
        <div className="navbar-end">
          
          <button className="btn btn-outline btn-warning">{user?.email}</button>
          {
            user?.uid?
            <div className="avatar">
              <Link>
                <button onClick={handleLogOut} className="btn mr-2">Log Out</button>
              </Link>
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="profile" src={user?.photoURL}/>
              </div>
          </div>
          :
          <div className="flex justify-center align-items-center">
            <Link to='/login' className="mr-2">
                <button className="btn">Log IN</button>
            </Link>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <FaUser className="ml-4 mt-4"></FaUser>
              </div>
          </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
