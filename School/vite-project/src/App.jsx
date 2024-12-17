
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Sidebar from "./components/Student/StudentSidebar";
// import Navbar from "./components/Student/StudentNavbar";
// import Dashboard from "./pages/Student/StudentDashboard";
// import Timetable from "./pages/Student/StudentTimetable";
// import Markscard from "./pages/Student/StudentMarkscard";
// import StudentAdmission from "./pages/Student/StudentAdmission";
// import OnlineAdmission from "./pages/Student/StudentOnlineadmission";
// import AdmitCard from "./pages/Student/StudentAdmitcard";
// import StudentFeesCollection from "./pages/Student/StudentFeesCollection";
// import StudentDueFees from "./pages/Student/StudentDueFees";
// import Events from "./pages/Student/StudentEvents";
// import ManageAlumni from "./pages/Student/StudentManageAlumni";
// import LessonPlan from "./pages/Student/StudentLessonPlan";
// import StudentCategories from "./pages/Student/StudentCategories";
// import StudentProgressReport from "./pages/Student/StudentProgressReport";
// import Section from "./pages/Student/StuddentSection";
// import Login from "./components/Student/StudentLogin";
// import "./App.css";
// // import Home from "./Home";
// import QuestionBank from "./pages/Student/StudentQuestionBank";
// import LeaveApproval from "./pages/Student/StudentLeaveApporval";
// import StudentAttendance from "./pages/Student/StudentAttendance";

// function App() {
//   const [sidebarToggle, setSidebarToggle] = useState(false);
//   const [darkMode, setDarkMode] = useState(true); // Dark mode state
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Mock login handler
//   const handleLogin = (email, password) => {
//     if (email === "student@school.com" && password === "123") {
//       setIsLoggedIn(true);
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <Router>
//       <div className={`app-container flex ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
//         {isLoggedIn && (
//           <Sidebar sidebarToggle={sidebarToggle} darkMode={darkMode} />
//         )}
//         <div
//           className={`main-content flex-1 transition-all duration-400 ease-in-out ${
//             isLoggedIn && sidebarToggle ? "ml-64" : isLoggedIn ? "ml-0" : ""
//           }`}
//         >
//           {isLoggedIn && (
//             <Navbar
//               sidebarToggle={sidebarToggle}
//               setSidebarToggle={setSidebarToggle}
//               darkMode={darkMode}
//               setDarkMode={setDarkMode} 
//             />
//           )}
//           <Routes>
//             {!isLoggedIn ? (
//               <Route path="*" element={<Login handleLogin={handleLogin} />} />
//             ) : (
//               <>
//               {/* <Route path="/" element={<Home />}> */}
//                   <Route path="dashboard" element={<Dashboard />} />
                  // <Route path="/" element={<Dashboard darkMode={darkMode} />} />
//                 <Route path="/timetable" element={<Timetable />} />
//                 <Route path="/markscard" element={<Markscard />} />
//                 <Route path="/studentadmission" element={<StudentAdmission />} />
//                 <Route path="/onlineadmission" element={<OnlineAdmission />} />
//                 <Route path="/admitcard" element={<AdmitCard />} />
//                 <Route path="/studentfeescollection" element={<StudentFeesCollection />}/>
//                 <Route path="/" element={<Timetable />} />
//                 <Route path="/studentduefees" element={<StudentDueFees />} />
//                 <Route path="/studentprogressreport" element={<StudentProgressReport />}/>
//                 <Route path="/events" element={<Events />} />
//                 <Route path="/managealumni" element={<ManageAlumni />} />
//                 <Route path="/lessonplan" element={<LessonPlan />} />
//                 <Route path="/section" element={<Section />} />
//                 <Route path="/questionbank" element={<QuestionBank />} />
//                 <Route path="/leaveapporval" element={<LeaveApproval />} />
//                 <Route path="/studentcategories" element={<StudentCategories />} />
//                 <Route path="/studentattendance" element={<StudentAttendance />} />
//                 {/* <Route path="*" element={<Navigate to="/" />} /> */}
//                 {/* </Route> */}
//                 </>
//             )}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentLayout from "./components/Student/StudentLayout";
import StudentDashboard from "./pages/Student/StudentDashboard";
import Timetable from "./pages/Student/StudentTimetable";
import Markscard from "./pages/Student/StudentMarkscard";
import StudentAdmission from "./pages/Student/StudentAdmission";
import OnlineAdmission from "./pages/Student/StudentOnlineadmission";
import AdmitCard from "./pages/Student/StudentAdmitcard";
import StudentFeesCollection from "./pages/Student/StudentFeesCollection";
import StudentDueFees from "./pages/Student/StudentDueFees";
import Events from "./pages/Student/StudentEvents";
import ManageAlumni from "./pages/Student/StudentManageAlumni";
import LessonPlan from "./pages/Student/StudentLessonPlan";
import StudentCategories from "./pages/Student/StudentCategories";
import StudentProgressReport from "./pages/Student/StudentProgressReport";
import Section from "./pages/Student/StuddentSection";
import QuestionBank from "./pages/Student/StudentQuestionBank";
import LeaveApproval from "./pages/Student/StudentLeaveApporval";
import StudentAttendance from "./pages/Student/StudentAttendance";


import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Protected Routes within StudentLayout */}

        <Route path="/student" element={<StudentLayout />}>
        <Route index element= {< Navigate to ="studentdashboard" />} />
        <Route path="studentdashboard" element={<StudentDashboard />} />

          <Route path="timetable" element={<Timetable />} />
          <Route path="markscard" element={<Markscard />} />
          <Route path="studentadmission" element={<StudentAdmission />} />
          <Route path="onlineadmission" element={<OnlineAdmission />} />
          <Route path="admitcard" element={<AdmitCard />} />
          <Route path="studentfeescollection" element={<StudentFeesCollection />} />
          <Route path="studentduefees" element={<StudentDueFees />} />
          <Route path="studentprogressreport" element={<StudentProgressReport />} />
          <Route path="events" element={<Events />} />
          <Route path="managealumni" element={<ManageAlumni />} />
          <Route path="lessonplan" element={<LessonPlan />} />
          <Route path="section" element={<Section />} />
          <Route path="questionbank" element={<QuestionBank />} />
          <Route path="leaveapporval" element={<LeaveApproval />} />
          <Route path="studentcategories" element={<StudentCategories />} />
          <Route path="studentattendance" element={<StudentAttendance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



