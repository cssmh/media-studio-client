import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img_66.png";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const home = location.pathname === "/";
  const admin = user?.email === import.meta.env.VITE_admin;

  const handleLogout = () => {
    logOut().then().catch();
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const getLinkClasses = (path) => {
    return location.pathname === path ? "underline text-yellow-600" : "";
  };

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div>
      <div className="bg-black py-2">
        <p className="text-[13px] text-white px-3 md:px-12">
          VIP{" "}
          <span className="text-gray-400">
            <span className="text-yellow-500 font-semibold">
              $5000 SHOPPING SPREE
            </span>{" "}
            Join Movies VIP for a chance to win. Don&lsquo;t forget to join
            during checkout
          </span>
        </p>
      </div>
      <div className={`navbar h-[59px] px-2 lg:px-12 ${!home && "border-b"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                className={`px-3 flex items-center p-[2px] ${getLinkClasses(
                  "/"
                )}`}
              >
                Home
              </Link>
              <Link
                to="/all-movies"
                className={`px-3 flex items-center p-[2px] ${getLinkClasses(
                  "/all-movies"
                )}`}
              >
                Movies
              </Link>
              <Link
                to="/show-time"
                className={`px-3 flex items-center p-[2px] ${getLinkClasses(
                  "/show-time"
                )}`}
              >
                Show Time
              </Link>
              <Link
                to="/top-rated"
                className={`px-3 flex items-center p-[2px] ${getLinkClasses(
                  "/top-rated"
                )}`}
              >
                Top Rated
              </Link>
              {admin && (
                <Link
                  to="/add-movie"
                  className={`px-3 flex items-center p-[2px] ${getLinkClasses(
                    "/add-movie"
                  )}`}
                >
                  Add Movie
                </Link>
              )}
            </ul>
          </div>
          <img src={logo} className="w-28" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <Link
              to="/"
              className={`flex font-semibold items-center p-2 ${getLinkClasses(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              to="/all-movies"
              className={`flex font-semibold items-center p-2 ${getLinkClasses(
                "/all-movies"
              )}`}
            >
              Movies
            </Link>
            <Link
              to="/show-time"
              className={`flex font-semibold items-center p-2 ${getLinkClasses(
                "/show-time"
              )}`}
            >
              Show Time
            </Link>
            <Link
              to="/top-rated"
              className={`flex font-semibold items-center p-2 ${getLinkClasses(
                "/top-rated"
              )}`}
            >
              Top Rated
            </Link>
            {admin && (
              <Link
                to="/add-movie"
                className={`flex font-semibold items-center p-2 ${getLinkClasses(
                  "/add-movie"
                )}`}
              >
                Add Movie
              </Link>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="input input-bordered w-full max-w-xs"
            />
            <button className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.5 4.5a7.5 7.5 0 017.15 12.15z"
                />
              </svg>
            </button>
          </div>
          {/* theme switch */}
          <label className="swap swap-rotate mr-2">
            <input
              onChange={handleToggle}
              // show toggle image based on local storage theme
              checked={theme === "dark" ? false : true}
              type="checkbox"
              className="theme-controller"
            />
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.11-.21A7,7,0,0,1,12.7,3.47a1,1,0,0,0-.75-1.2A9,9,0,1,0,21.85,13.77,1,1,0,0,0,21.64,13ZM12,20A7,7,0,0,1,10.28,6.32,9,9,0,0,0,18.7,14.69,7,7,0,0,1,12,20Z" />
            </svg>
          </label>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to={"/my-profile"}>
                  <li>
                    <button className="btn btn-sm btn-ghost">
                      {user?.displayName ? user?.displayName : "No Name found!"}
                    </button>
                  </li>
                </Link>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm border-purple-500 btn-outline">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
