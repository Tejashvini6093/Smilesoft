
// import React, { useState } from "react";
// import studentData from "../../studentdata.json"; // Import the JSON data
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { FaPrint, FaFilePdf, FaFileExcel } from "react-icons/fa"; // Icons
// import * as XLSX from "xlsx";  // Import XLSX for Excel

// const StudentProgressReport = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [student, setStudent] = useState(null);

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle search and find student by name or roll number
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const foundStudent = studentData.find(
//       (s) =>
//         s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         s.rollNumber.includes(searchQuery)
//     );
//     setStudent(foundStudent);
//   };

//   // Generate PDF from the progress report
//   const handleDownloadPDF = () => {
//     const input = document.getElementById("report");
//     html2canvas(input, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("Student_Progress_Report.pdf");
//     });
//   };

//   // Handle Excel Download
//   const handleDownloadExcel = () => {
//     const studentDataForExcel = {
//       Name: student.name,
//       RollNumber: student.rollNumber,
//       Attendance: student.attendance,
//       MathGrade: student.mathGrade,
//       EnglishGrade: student.englishGrade,
//       ScienceGrade: student.scienceGrade,
//       AssignmentsCompleted: `${student.assignmentsCompleted}/${student.assignmentsTotal}`,
//     };

//     // Convert to a 2D array
//     const data = [
//       ["Field", "Details"],
//       ...Object.entries(studentDataForExcel),
//     ];

//     // Create a worksheet and a workbook
//     const ws = XLSX.utils.aoa_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Progress Report");

//     // Download the Excel file
//     XLSX.writeFile(wb, "Student_Progress_Report.xlsx");
//   };

//   const handlePrint = () => {

//     window.print();
//   };

//   return (
//     <div className="bg-[#192137] min-h-screen">
//       <div className="max-w-4xl mx-auto my-8 p-6 bg-[#272E48] shadow-lg rounded-lg">
//         <h1 className="text-3xl font-bold text-center text-white mb-6">
//           Search Student Progress Report
//         </h1>

//         {/* Search Form */}
//         <form onSubmit={handleSearchSubmit} className="flex justify-center mb-6">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-80 p-2 border border-gray-300 rounded-md"
//             placeholder="Search by name or roll number"
//           />
//           <button
//             type="submit"
//             className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Search
//           </button>
//         </form>
//       </div>

//       {/* Display Progress Report if student is found */}
//       {student && (
//         <div className="max-w-4xl mx-auto p-6 bg-[#272E48] shadow-lg rounded-lg mt-8">
//           <h2 className="text-3xl font-semibold text-center text-white mb-6 ">
//             Student Progress Report
//           </h2>

//           <div id="report" className="overflow-x-auto bg-[#272E48]e p-4 rounded-md shadow-md">
//             <table className="min-w-full table-auto border-collapse">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 border-b text-left">Field</th>
//                   <th className="px-4 py-2 border-b text-left">Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="px-4 py-2 border-b font-semibold">Name</td>
//                   <td className="px-4 py-2 border-b">{student.name}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2 border-b font-semibold">Roll Number</td>
//                   <td className="px-4 py-2 border-b">{student.rollNumber}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2 border-b font-semibold">Attendance</td>
//                   <td className="px-4 py-2 border-b">{student.attendance}%</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2 border-b font-semibold">Math Grade</td>
//                   <td className="px-4 py-2 border-b">{student.mathGrade}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2 border-b font-semibold">English Grade</td>
//                   <td className="px-4 py-2 border-b">{student.englishGrade}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2 border-b font-semibold">Science Grade</td>
//                   <td className="px-4 py-2 border-b">{student.scienceGrade}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2 border-b font-semibold">Assignments Completed</td>
//                   <td className="px-4 py-2 border-b">
//                     {student.assignmentsCompleted}/{student.assignmentsTotal}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Download/Print Icons */}
//           <div className="text-center mt-6 flex justify-center space-x-6">
//             <button onClick={handlePrint} className="text-white hover:text-black text-2xl">
//               <FaPrint /> <span className="text-sm">Print</span>
//             </button>
//             <button
//               onClick={handleDownloadPDF}
//               className="text-white hover:text-black text-2xl"
//             >
//               <FaFilePdf /> <span className="text-sm">PDF</span>
//             </button>
//             <button
//               onClick={handleDownloadExcel}
//               className="text-white hover:text-black text-2xl"
//             >
//               <FaFileExcel /> <span className="text-sm">Excel</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentProgressReport;


import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaPrint, FaFilePdf, FaFileExcel } from "react-icons/fa"; // Icons
import * as XLSX from "xlsx"; // Import XLSX for Excel

const StudentProgressReport = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [student, setStudent] = useState(null);

  // Fetch JSON data from public folder
  useEffect(() => {
    fetch("/student/studentdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch student data.");
        }
        return response.json();
      })
      .then((data) => {
        setStudentData(data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search and find student by name or roll number
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const foundStudent = studentData.find(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.rollNumber.includes(searchQuery)
    );
    setStudent(foundStudent || null);
  };

  // Generate PDF from the progress report
  const handleDownloadPDF = () => {
    const input = document.getElementById("report");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Student_Progress_Report.pdf");
    });
  };

  // Handle Excel Download
  const handleDownloadExcel = () => {
    const studentDataForExcel = {
      Name: student.name,
      RollNumber: student.rollNumber,
      Attendance: student.attendance,
      MathGrade: student.mathGrade,
      EnglishGrade: student.englishGrade,
      ScienceGrade: student.scienceGrade,
      AssignmentsCompleted: `${student.assignmentsCompleted}/${student.assignmentsTotal}`,
    };

    // Convert to a 2D array
    const data = [
      ["Field", "Details"],
      ...Object.entries(studentDataForExcel),
    ];

    // Create a worksheet and a workbook
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Progress Report");

    // Download the Excel file
    XLSX.writeFile(wb, "Student_Progress_Report.xlsx");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#192137] min-h-screen">
      <div className="max-w-4xl mx-auto my-8 p-6 bg-[#272E48] shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Search Student Progress Report
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearchSubmit} className="flex justify-center mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-80 p-2 border border-gray-300 rounded-md"
            placeholder="Search by name or roll number"
          />
          <button
            type="submit"
            className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Display Progress Report if student is found */}
      {student ? (
        <div className="max-w-4xl mx-auto p-6 bg-[#272E48] shadow-lg rounded-lg mt-8">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Student Progress Report
          </h2>

          <div id="report" className="overflow-x-auto bg-[#272E48] p-4 rounded-md shadow-md">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Field</th>
                  <th className="px-4 py-2 border-b text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Name</td>
                  <td className="px-4 py-2 border-b">{student.name}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Roll Number</td>
                  <td className="px-4 py-2 border-b">{student.rollNumber}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Attendance</td>
                  <td className="px-4 py-2 border-b">{student.attendance}%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Math Grade</td>
                  <td className="px-4 py-2 border-b">{student.mathGrade}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">English Grade</td>
                  <td className="px-4 py-2 border-b">{student.englishGrade}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Science Grade</td>
                  <td className="px-4 py-2 border-b">{student.scienceGrade}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Assignments Completed</td>
                  <td className="px-4 py-2 border-b">
                    {student.assignmentsCompleted}/{student.assignmentsTotal}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Download/Print Icons */}
          <div className="text-center mt-6 flex justify-center space-x-6">
            <button onClick={handlePrint} className="text-white hover:text-black text-2xl">
              <FaPrint /> <span className="text-sm">Print</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="text-white hover:text-black text-2xl"
            >
              <FaFilePdf /> <span className="text-sm">PDF</span>
            </button>
            <button
              onClick={handleDownloadExcel}
              className="text-white hover:text-black text-2xl"
            >
              <FaFileExcel /> <span className="text-sm">Excel</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-white mt-6">
          {searchQuery && "No student found with the given search criteria."}
        </div>
      )}
    </div>
  );
};

export default StudentProgressReport;
