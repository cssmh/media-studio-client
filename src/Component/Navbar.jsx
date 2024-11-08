import { Link, useLocation } from "react-router-dom";
import logo from "../assets/cine.png";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const home = location.pathname === "/";
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const admin = user?.email === import.meta.env.VITE_admin;

  const handleLogout = () => {
    logOut().then().catch();
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const getLinkClasses = (path) => {
    return location.pathname === path ? "underline text-yellow-600" : "";
  };

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <div className="bg-black py-2">
        <p className="text-[13px] text-white px-3 md:px-12">
          Book your 30% discount ticket
        </p>
      </div>
      <div className={`navbar h-[59px] px-2 lg:px-12 ${!home && "border-b"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-ghost lg:hidden"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                to="/"
                className={`px-2 flex items-center p-[2px] ${getLinkClasses(
                  "/"
                )}`}
              >
                Home
              </Link>
              <Link
                to="/all-movies"
                className={`px-2 flex items-center p-[2px] ${getLinkClasses(
                  "/all-movies"
                )}`}
              >
                Movies
              </Link>
              <Link
                to="/show-time"
                className={`px-2 flex items-center p-[2px] ${getLinkClasses(
                  "/show-time"
                )}`}
              >
                Show Times
              </Link>
              <Link
                to="/top-rated"
                className={`px-2 flex items-center p-[2px] ${getLinkClasses(
                  "/top-rated"
                )}`}
              >
                Top Rated
              </Link>
              <Link
                to="/my-bookings"
                className={`px-2 flex items-center p-[2px] ${getLinkClasses(
                  "/my-bookings"
                )}`}
              >
                My Bookings
              </Link>
              {admin && (
                <Link
                  to="/add-movie"
                  className={`px-2 flex items-center p-[2px] ${getLinkClasses(
                    "/add-movie"
                  )}`}
                >
                  Add Movie
                </Link>
              )}
            </ul>
          </div>
          <img src={logo} className="w-24" alt="Cinema Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <Link
              to="/"
              className={`font-semibold items-center p-2 ${getLinkClasses(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              to="/all-movies"
              className={`font-semibold items-center p-2 ${getLinkClasses(
                "/all-movies"
              )}`}
            >
              Movies
            </Link>
            <Link
              to="/show-time"
              className={`font-semibold items-center p-2 ${getLinkClasses(
                "/show-time"
              )}`}
            >
              Show Times
            </Link>
            <Link
              to="/top-rated"
              className={`font-semibold items-center p-2 ${getLinkClasses(
                "/top-rated"
              )}`}
            >
              Top Rated
            </Link>
            <Link
              to="/my-bookings"
              className={`font-semibold items-center p-2 ${getLinkClasses(
                "/my-bookings"
              )}`}
            >
              My Bookings
            </Link>
            {admin && (
              <Link
                to="/add-movie"
                className={`font-semibold items-center p-2 ${getLinkClasses(
                  "/add-movie"
                )}`}
              >
                Add Movie
              </Link>
            )}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <label className="swap swap-rotate mr-2">
            <input
              onChange={handleToggle}
              checked={theme === "light"}
              type="checkbox"
              className="theme-controller"
            />
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.11-.21A7,7,0,0,1,12.7,3.47a1,1,0,0,0-.75-1.2A9,9,0,1,0,21.64,13Z" />
            </svg>
          </label>
          <div className="dropdown dropdown-end">
            {user ? (
              <div className="flex items-center">
                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </div>
                <button
                  className="bg-red-600 text-white p-1 rounded-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginModalOpen(true)}
                className="text-xl text-gray-600"
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
};

export default Navbar;
