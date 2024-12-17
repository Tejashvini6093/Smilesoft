


import React from "react";
import { FaBars, FaSun, FaMoon, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const StudentNavbar = ({ sidebarToggle, setSidebarToggle, darkMode, setDarkMode }) => {
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <nav
      className={`px-4 py-3 fixed w-full top-0 left-0 z-20 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } transition-all duration-500`}
    >
      <div className="flex justify-between items-center">
        {/* Sidebar Toggle and Title */}
        <div className="flex items-center">
          <FaBars
            className={`text-2xl ml-60 cursor-pointer ${
              darkMode ? "text-white" : "text-black"
            }`}
            onClick={toggleSidebar}
          />
          <span
            className={`ml-4 font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Menu
          </span>
          <span
            className={`ml-8 font-bold text-lg ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ST. TERESA'S
          </span>
        </div>

        {/* Right Section: Search, Notifications, Profile, and Dark Mode Toggle */}
        <div className="flex items-center gap-x-5">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <FaSearch
              className={`absolute top-2.5 left-3 ${
                darkMode ? "text-gray-400" : "text-white"
              }`}
            />
            <input
              type="text"
              placeholder="Search..."
              className={`w-64 pl-10 pr-4 py-2 rounded-lg shadow outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 text-white focus:ring-gray-500"
                  : "bg-white text-gray-800 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Notifications */}
          <FaBell
            className={`w-6 h-6 cursor-pointer ${
              darkMode ? "text-white" : "text-black"
            }`}
          />

          {/* User Profile */}
          <div className="relative group">
            <button className="focus:outline-none">
              <FaUserCircle
                className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
              />
            </button>
            <div
              className={`absolute right-0 z-10 hidden bg-white rounded-lg shadow-lg w-32 group-hover:block ${
                darkMode ? "bg-gray-700 text-white" : "text-gray-800"
              }`}
            >
              <ul className="py-2 text-sm">
                <li className="px-4 py-2 hover:bg-gray-300">
                  <a href="#">Profile</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-300">
                  <a href="#">Settings</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-300">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all duration-300 ${
              darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-800"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StudentNavbar;
