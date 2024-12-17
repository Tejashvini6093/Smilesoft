

import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentSidebar = ({ sidebarToggle, darkMode }) => {
  // Dropdown state handlers
  const [dropdowns, setDropdowns] = useState({
    attendance: false,
    admitCard: false,
    feesCollection: false,
    studentInfo: false,
    timetable: false,
    onlineExamination: false,
    academics: false,
    examResult: false,
    markscard: false,
    alumniConnect: false,
    lessonPlan: false,
  });

  // Toggle function for dropdowns
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Shared styles based on darkMode
  const bgClass = darkMode ? "bg-gray-800" : "bg-gray-200";
  const hoverClass = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-300";
  const textClass = darkMode ? "text-white" : "text-gray-900";

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 transform ${
        sidebarToggle ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="my-4 px-6">
        <h1 className={`text-4xl font-bold ${textClass}`}>iCloudEms</h1>
      </div>
      <hr className={`${darkMode ? "border-gray-700" : "border-gray-300"}`} />
      <ul className="mt-4 font-bold">
        {/* Profile */}
        <li className={`mb-2 rounded py-2 ${hoverClass}`}>
          <Link to="#" className={`px-4 flex items-center ${textClass}`}>
            Profile
          </Link>
        </li>

        {/* Dropdown Components */}
        {[
          {
            key: "attendance",
            label: "🗓️ Attendance",
            items: [
              { to: "/student/leaveapporval", label: "LeaveApporval" },
              { to: "/student/StudentAttendance", label: "Student Attendance" },
            ],
          },
          {
            key: "admitCard",
            label: "📄 Admit Card",
            items: [
              { to: "/student/admit card", label: " Admit Card" },
              { to: "#", label: "Admit Card Details" },
              { to: "#", label: "Attendance by Date" },
            ],
          },
          {
            key: "markscard",
            label: "📄 Markscard",
            items: [
              { to: "/markscard", label: "Print Markscard" },
              { to: "#", label: "Markscard Details" },
              { to: "#", label: "Attendance by Date" },
            ],
          },
          // {
          //   key: "attendance",
          //   label: "🗓️ Attendance",
          //   items: [
          //     { to: "/leaveapproval", label: "Leave Request" },
          //     { to: "/StudentAttendance", label: "Student Attendance" },
          //   ],
          // },
          // {
          //   key: "admitCard",
          //   label: "📄 Admit Card",
          //   items: [
          //     { to: "/admitcard", label: "Print Admit Card" },
          //     { to: "#", label: "Admit Card Details" },
          //     { to: "#", label: "Attendance by Date" },
          //   ],
          // },
          {
            key: "feesCollection",
            label: "💰 Fees Collection",
            items: [
              { to: "/student/studentfeescollection", label: "studentfeescollection" },
              { to: "/feesHistory", label: "Fees History" },
              { to: "#", label: "Pending Dues" },
            ],
          },
          {
            key: "studentInfo",
            label: "📚 Student Information",
            items: [
              { to: "/student/studentAdmission", label: "studentAdmission" },
              { to: "/student/OnlineAdmission", label: "OnlineAdmission" },
              { to: "/student/studentProgressReport", label: "StudentProgressReport" },
              { to: "#", label: "Enrollment Details" },
            ],
          },
          {
            key: "timetable",
            label: "📅 Timetable",
            items: [
              { to: "/student/timetable", label: "timetable" },
              { to: "/examSchedule", label: "Exam Schedule" },
              { to: "#", label: "Custom Timetable" },
            ],
          },
          {
            key: "onlineExamination",
            label: "🖥️ Online Examination",
            items: [
              { to: "/examPortal", label: "Exam Portal" },
              { to: "/results", label: "View Results" },
              { to: "#", label: "Exam Instructions" },
            ],
          },
          {
            key: "academics",
            label: "🎓 Academics",
            items: [
              { to: "/section", label: "Section" },
              { to: "/curriculum", label: "Curriculum" },
              { to: "/subjects", label: "Subjects" },
              { to: "#", label: "Academic Calendar" },
            ],
          },
          {
            key: "examResult",
            label: "📊 Exam Results",
            items: [
              { to: "/resultDashboard", label: "Result Dashboard" },
              { to: "/studentResult", label: "Student Results" },
              { to: "#", label: "Grade Statistics" },
            ],
          },
          {
            key: "markscard",
            label: "📄 Markscard",
            items: [
              { to: "/markscard", label: "Print Markscard" },
              { to: "#", label: "Markscard Details" },
              { to: "#", label: "Attendance by Date" },
            ],
          },
          {
            key: "alumniConnect",
            label: "🎓 Alumni Connect",
            items: [
              { to: "/Events", label: "Events" },
              { to: "/alumniDirectory", label: "Alumni Directory" },
              { to: "#", label: "Networking Opportunities" },
            ],
          },
          {
            key: "lessonPlan",
            label: "📝 Lesson Plan",
            items: [
              { to: "/lessonOverview", label: "Lesson Overview" },
              { to: "/lessonSubmission", label: "Submit Plans" },
              { to: "#", label: "Archived Plans" },
            ],
          }
          
          // Add more dropdowns here as needed
        ].map((dropdown) => (
          <li className="mb-2" key={dropdown.key}>
            <button
              onClick={() => toggleDropdown(dropdown.key)}
              className={`w-full flex justify-between items-center px-4 py-2 ${bgClass} rounded ${hoverClass}`}
            >
              {dropdown.label}
              <span
                className={`transform transition-transform ${
                  dropdowns[dropdown.key] ? "rotate-180" : "rotate-0"
                }`}
              >
                ^
              </span>
            </button>
            {dropdowns[dropdown.key] && (
              <ul className={`mt-2 ml-4 ${bgClass} rounded`}>
                {dropdown.items.map((item, index) => (
                  <li className="mb-1" key={index}>
                    <Link
                      to={item.to}
                      className={`block px-4 py-2 rounded ${hoverClass} ${textClass}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSidebar;
