
import React from "react";

const features = [
  { name: "Admit Card", icon: "📄" },
  { name: "Alumni Connect", icon: "🤝" },
  { name: "Assignments", icon: "✍️" },
  { name: "Attendance", icon: "🗓️" },
  { name: "Circular", icon: "📜" },
  { name: "College Info", icon: "🏫" },
  { name: "Courses", icon: "📚" },
  { name: "Exam Seating", icon: "🪑" },
  { name: "Fee Undertaking", icon: "💳" },
  { name: "Feedback", icon: "💬" },
  { name: "Fees", icon: "💵" },
  { name: "Grievance", icon: "📨" },
  { name: "LMS", icon: "🎓" },
  { name: "Mentor Mentee", icon: "👩‍🏫" },
  { name: "My Report Card", icon: "📈" },
  { name: "NEFT Form", icon: "📑" },
  { name: "Online Exam", icon: "🖥️" },
  { name: "Performances", icon: "📊" },
  { name: "PhD", icon: "🎓" },
  { name: "Student Services", icon: "🛠️" },
  { name: "Survey", icon: "📝" },
  { name: "Time Table", icon: "⏰" },
];

const StudentDashboard = ({ darkMode }) => {
  return (
    <div
      className={`p-8 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-gray-800"
      } transition-all duration-500`}
    >
      {/* Header */}
      <header
        className={`p-7 ${
          darkMode ? "bg-[#192137]-800 text-gray-100" : "bg-blue-600 text-gray-900"
        }`}
      >
        <h1 className="text-2xl font-bold text-center">
          School of Computing Science & Engineering
        </h1>
      </header>

      {/* Features Section */}
      <main className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 ${
                darkMode ? "bg-gray-800" : "bg-blue-100"
              }`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center text-white rounded-full mb-4 text-bold text-4xl ${
                  darkMode ? "bg-gray-600" : "bg-blue-500"
                }`}
              >
                {feature.icon}
              </div>
              <p
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.name}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
