import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./StudentSidebar";
import Navbar from "./StudentNavbar";

const StudentLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app-container flex ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <Sidebar sidebarToggle={sidebarToggle} darkMode={darkMode} />
      <div
        className={`main-content flex-1 transition-all duration-400 ease-in-out ${
          sidebarToggle ? "ml-64" : ""
        }`}
      >
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
