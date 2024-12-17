// import React, { useState } from 'react';

// // Example JSON data for student attendance
// const StudentsAttendanceData = [
//   {
//     name: 'Ram',
//     studentId: '56345',
//     course: 'Computer Science',
//     year: '3rd Year',
//     attendance: {
//       totalClasses: 50,
//       attendedClasses: 45,
//     },
//   },
//   {
//     name: 'Sham',
//     studentId: '67890',
//     course: 'Information Science',
//     year: '2nd Year',
//     attendance: {
//       totalClasses: 50,
//       attendedClasses: 40,
//     },
//   },
// ];

// const StudentAttendance = () => {
//   const [searchName, setSearchName] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleSearch = () => {
//     const student = StudentsAttendanceData.find(
//       (s) => s.name.toLowerCase() === searchName.toLowerCase()
//     );
//     setSelectedStudent(student);
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-300">
//       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Student Attendance</h1>

//       {/* Search Section */}
//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2 text-green-600">Search Student</h2>
//         <div className="flex items-center gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Enter student name"
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//           >
//             Search
//           </button>
//         </div>
//       </section>

//       {selectedStudent ? (
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h2 className="text-xl font-semibold text-green-600 mb-4">Student Details</h2>
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-green-200">
//                 <th className="px-4 py-2 border border-gray-300">Field</th>
//                 <th className="px-4 py-2 border border-gray-300">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Name</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.name}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Student ID</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.studentId}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Course</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.course}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Year</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.year}</td>
//               </tr>
//             </tbody>
//           </table>

//           <h2 className="text-xl font-semibold text-green-600 mt-6 mb-4">Attendance Details</h2>
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-green-200">
//                 <th className="px-4 py-2 border border-gray-300">Metric</th>
//                 <th className="px-4 py-2 border border-gray-300">Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Total Classes</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.attendance.totalClasses}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Classes Attended</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.attendance.attendedClasses}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Attendance Percentage</td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {((selectedStudent.attendance.attendedClasses / selectedStudent.attendance.totalClasses) * 100).toFixed(2)}%
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-red-500">No student found with the name "{searchName}"</p>
//       )}
//     </div>
//   );
// };

// export default StudentAttendance;



// import React, { useState } from 'react';

// // Example JSON data for student attendance
// const StudentsAttendanceData = [
//   {
//     name: 'Ram',
//     studentId: '56345',
//     course: 'Computer Science',
//     year: '3rd Year',
//     attendance: {
//       totalClasses: 50,
//       attendedClasses: 45,
//       attendedClassesList: [
//         'Maths 101 - 01/09/2024',
//         'CS 201 - 05/09/2024',
//         'Physics 102 - 10/09/2024',
//       ],
//     },
//   },
//   {
//     name: 'Sham',
//     studentId: '67890',
//     course: 'Information Science',
//     year: '2nd Year',
//     attendance: {
//       totalClasses: 50,
//       attendedClasses: 40,
//       attendedClassesList: [
//         'CS 102 - 02/09/2024',
//         'Data Structures - 04/09/2024',
//         'Maths 101 - 08/09/2024',
//       ],
//     },
//   },
// ];

// const StudentAttendance = () => {
//   const [searchName, setSearchName] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleSearch = () => {
//     const student = StudentsAttendanceData.find(
//       (s) => s.name.toLowerCase() === searchName.toLowerCase()
//     );
//     setSelectedStudent(student);
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-300">
//       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Student Attendance</h1>

//       {/* Search Section */}
//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2 text-green-600">Search Student</h2>
//         <div className="flex items-center gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Enter student name"
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//           >
//             Search
//           </button>
//         </div>
//       </section>

//       {selectedStudent ? (
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h2 className="text-xl font-semibold text-green-600 mb-4">Student Details</h2>
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-green-200">
//                 <th className="px-4 py-2 border border-gray-300">Field</th>
//                 <th className="px-4 py-2 border border-gray-300">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Name</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.name}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Student ID</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.studentId}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Course</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.course}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Year</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.year}</td>
//               </tr>
//             </tbody>
//           </table>

//           <h2 className="text-xl font-semibold text-green-600 mt-6 mb-4">Attendance Details</h2>
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-green-200">
//                 <th className="px-4 py-2 border border-gray-300">Metric</th>
//                 <th className="px-4 py-2 border border-gray-300">Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Total Classes</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.attendance.totalClasses}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Classes Attended</td>
//                 <td className="px-4 py-2 border border-gray-300">{selectedStudent.attendance.attendedClasses}</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border border-gray-300">Attendance Percentage</td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {((selectedStudent.attendance.attendedClasses / selectedStudent.attendance.totalClasses) * 100).toFixed(2)}%
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <h2 className="text-xl font-semibold text-green-600 mt-6 mb-4">Classes Attended</h2>
//           <ul className="list-disc pl-6">
//             {selectedStudent.attendance.attendedClassesList.length > 0 ? (
//               selectedStudent.attendance.attendedClassesList.map((classInfo, index) => (
//                 <li key={index}>{classInfo}</li>
//               ))
//             ) : (
//               <li>No classes attended yet.</li>
//             )}
//           </ul>
//         </div>
//       ) : (
//         <p className="text-red-500">No student found with the name "{searchName}"</p>
//       )}
//     </div>
//   );
// };

// export default StudentAttendance;
import React, { useState } from 'react';

// Example JSON data for student attendance
const StudentsAttendanceData = [
  {
    name: 'Ram',
    studentId: '56345',
    course: 'Computer Science',
    year: '3rd Year',
    attendance: {
      totalClasses: 50,
      attendedClasses: 45,
      attendedClassesList: [
        'Maths 101 - 01/09/2024',
        'CS 201 - 05/09/2024',
        'Physics 102 - 10/09/2024',
        'Maths 101 - 15/09/2024',
      ],
    },
  },
  {
    name: 'Sham',
    studentId: '67890',
    course: 'Information Science',
    year: '2nd Year',
    attendance: {
      totalClasses: 50,
      attendedClasses: 40,
      attendedClassesList: [
        'CS 102 - 02/09/2024',
        'Data Structures - 04/09/2024',
        'Maths 101 - 08/09/2024',
        'CS 102 - 10/09/2024',
      ],
    },
  },
];

const StudentAttendance = () => {
  const [searchName, setSearchName] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [classSearch, setClassSearch] = useState('');
  const [attendanceCount, setAttendanceCount] = useState(null);

  const handleSearch = () => {
    const student = StudentsAttendanceData.find(
      (s) => s.name.toLowerCase() === searchName.toLowerCase()
    );
    setSelectedStudent(student);
  };

  const handleClassSearch = () => {
    if (selectedStudent) {
      // Count the number of times the class appears in attendedClassesList
      const classCount = selectedStudent.attendance.attendedClassesList.filter(
        (classItem) => classItem.toLowerCase().includes(classSearch.toLowerCase())
      ).length;
      setAttendanceCount(classCount);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-[#192137]">
      <h1 className="text-3xl font-bold text-center text-white p-9 mb-6">Student Attendance</h1>

      {/* Search Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Search Student</h2>
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter student name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Search
          </button>
        </div>
      </section>

      {selectedStudent ? (
        <div className="bg-[272E48] p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-green-600 mb-4">Student Details</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-200">
                <th className="px-4 py-2 border border-white">Field</th>
                <th className="px-4 py-2 border border-white">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-white">Name</td>
                <td className="px-4 py-2 border border-gray-300">{selectedStudent.name}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Student ID</td>
                <td className="px-4 py-2 border border-gray-300">{selectedStudent.studentId}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Course</td>
                <td className="px-4 py-2 border border-gray-300">{selectedStudent.course}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Year</td>
                <td className="px-4 py-2 border border-gray-300">{selectedStudent.year}</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-4">Attendance Details</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-200">
                <th className="px-4 py-2 border border-gray-300">Metric</th>
                <th className="px-4 py-2 border border-gray-300">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Total Classes</td>
                <td className="px-4 py-2 border border-gray-300">{selectedStudent.attendance.totalClasses}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Classes Attended</td>
                <td className="px-4 py-2 border border-gray-300">{selectedStudent.attendance.attendedClasses}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Attendance Percentage</td>
                <td className="px-4 py-2 border border-gray-300">
                  {((selectedStudent.attendance.attendedClasses / selectedStudent.attendance.totalClasses) * 100).toFixed(2)}%
                </td>
              </tr>
            </tbody>
          </table>

          {/* Search for class attendance */}
          <h2 className="text-xl font-semibold text-green-600 mt-6 mb-4">Search Class Attendance</h2>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter class name"
              value={classSearch}
              onChange={(e) => setClassSearch(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleClassSearch}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Search Class
            </button>
          </div>
          {attendanceCount !== null && (
            <div>
              <p className="text-lg">
                The student attended "{classSearch}" {attendanceCount} times.
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-red-500">No student found with the name "{searchName}"</p>
      )}
    </div>
  );
};

export default StudentAttendance;
