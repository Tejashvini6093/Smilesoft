
// import React, { useState } from "react";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import timetableData from "../timetableData.json";

// const StudentTimetable = () => {
//   const [sections] = useState(["A", "B", "C"]);
//   const [semesters] = useState(["II", "IV", "VI"]);
//   const [selectedSection, setSelectedSection] = useState("A");
//   const [selectedSemester, setSelectedSemester] = useState("II");
//   const [showTimetable, setShowTimetable] = useState(false);

//   // Handle section and semester changes
//   const handleSectionChange = (e) => setSelectedSection(e.target.value);
//   const handleSemesterChange = (e) => setSelectedSemester(e.target.value);

//   // Filter timetable based on selected section and semester
//   const filteredTimetable = timetableData.filter(
//     (item) => item.section === selectedSection && item.semester === selectedSemester
//   );

//   // Format date
//   const formatDate = (dateStr) => {
//     const [day, month, year] = dateStr.split("/");
//     const formattedDate = new Date(`20${year}-${month}-${day}`);
//     return formattedDate.toLocaleDateString("en-GB", {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   // Generate PDF
//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text(`Timetable for Section ${selectedSection} - Semester ${selectedSemester}`, 10, 10);
//     doc.setFontSize(12);

//     const tableData = filteredTimetable[0]?.slots.map((slot, index) => {
//       const row = [slot.time];
//       filteredTimetable.forEach((dayData) => {
//         row.push(dayData.slots[index]?.lecture || "No Class");
//       });
//       return row;
//     });

//     doc.autoTable({
//       startY: 20,
//       head: [["Time Slots", ...filteredTimetable.map((day) => `${day.day} (${formatDate(day.date)})`)]],
//       body: tableData || [],
//     });

//     doc.save(`Timetable_Sec${selectedSection}_Sem${selectedSemester}.pdf`);
//   };

//   // Handle submit button to show timetable
//   const handleSubmit = () => {
//     setShowTimetable(true);
//   };

//   return (
//     <div className="p-4 bg-gray-100 ml-20">
//       <div className="bg-white p-4 rounded shadow">
//         <h2 className="text-center text-2xl font-bold text-blue-700 mb-4">Student TimeTable</h2>

//         {/* Filters */}
//         <div className="mb-4 flex flex-col space-y-4">
//           <div>
//             <label className="block text-lg font-medium text-gray-600 mb-2">Select Section:</label>
//             <select
//               value={selectedSection}
//               onChange={handleSectionChange}
//               className="p-2 border border-gray-300 rounded-md w-full"
//             >
//               {sections.map((section, index) => (
//                 <option key={index} value={section}>
//                   {section}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-lg font-medium text-gray-600 mb-2">Select Semester:</label>
//             <select
//               value={selectedSemester}
//               onChange={handleSemesterChange}
//               className="p-2 border border-gray-300 rounded-md w-full"
//             >
//               {semesters.map((semester, index) => (
//                 <option key={index} value={semester}>
//                   {semester}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mb-4">
//             <button
//               onClick={handleSubmit}
//               className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
//             >
//               Submit
//             </button>
//           </div>
//         </div>

//         {/* Display Timetable after Submit */}
//         {showTimetable && filteredTimetable.length > 0 && (
//           <div className="flex flex-col bg-gray-50 p-4 border rounded-lg shadow-lg mt-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">
//               Timetable for Section {selectedSection} - Semester {selectedSemester}
//             </h3>
//             <div className="overflow-x-auto">
//               <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
//                 <thead>
//                   <tr className="bg-blue-500 text-white">
//                     <th className="border border-gray-300 p-2">Time Slots</th>
//                     {filteredTimetable.map((item, index) => (
//                       <th key={index} className="border border-gray-300 p-2">
//                         {item.day} <br />
//                         {formatDate(item.date)}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredTimetable[0]?.slots.map((slot, slotIndex) => (
//                     <tr key={slotIndex} className="text-center">
//                       <td className="border border-gray-300 p-2 font-medium">{slot.time}</td>
//                       {filteredTimetable.map((item, index) => (
//                         <td key={index} className="border border-gray-300 p-2">
//                           {item.slots[slotIndex]?.lecture || "No Class"}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Download Button */}
//         {showTimetable && (
//           <div className="flex justify-end mt-4">
//             <button
//               onClick={handleDownload}
//               className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
//             >
//               Download
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentTimetable;
import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const StudentTimetable = () => {
  const [sections] = useState(["A", "B", "C"]);
  const [semesters] = useState(["II", "IV", "VI"]);
  const [selectedSection, setSelectedSection] = useState("A");
  const [selectedSemester, setSelectedSemester] = useState("II");
  const [timetableData, setTimetableData] = useState([]);
  const [showTimetable, setShowTimetable] = useState(false);

  // Fetch timetable data from public folder
  useEffect(() => {
    fetch("/student/timetableData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch timetable data");
        }
        return response.json();
      })
      .then((data) => setTimetableData(data))
      .catch((error) => console.error("Error fetching timetable data:", error));
  }, []);

  // Handle section and semester changes
  const handleSectionChange = (e) => setSelectedSection(e.target.value);
  const handleSemesterChange = (e) => setSelectedSemester(e.target.value);

  // Filter timetable based on selected section and semester
  const filteredTimetable = timetableData.filter(
    (item) => item.section === selectedSection && item.semester === selectedSemester
  );

  // Format date
  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/");
    const formattedDate = new Date(`20${year}-${month}-${day}`);
    return formattedDate.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Generate PDF
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Timetable for Section ${selectedSection} - Semester ${selectedSemester}`, 10, 10);
    doc.setFontSize(12);

    const tableData = filteredTimetable[0]?.slots.map((slot, index) => {
      const row = [slot.time];
      filteredTimetable.forEach((dayData) => {
        row.push(dayData.slots[index]?.lecture || "No Class");
      });
      return row;
    });

    doc.autoTable({
      startY: 20,
      head: [["Time Slots", ...filteredTimetable.map((day) => `${day.day} (${formatDate(day.date)})`)]],
      body: tableData || [],
    });

    doc.save(`Timetable_Sec${selectedSection}_Sem${selectedSemester}.pdf`);
  };

  // Handle submit button to show timetable
  const handleSubmit = () => {
    setShowTimetable(true);
  };

  return (
    <div className="p-4 bg-gray-100 ml-20">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-4">Student TimeTable</h2>

        {/* Filters */}
        <div className="mb-4 flex flex-col space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Select Section:</label>
            <select
              value={selectedSection}
              onChange={handleSectionChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            >
              {sections.map((section, index) => (
                <option key={index} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Select Semester:</label>
            <select
              value={selectedSemester}
              onChange={handleSemesterChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            >
              {semesters.map((semester, index) => (
                <option key={index} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Display Timetable after Submit */}
        {showTimetable && filteredTimetable.length > 0 && (
          <div className="flex flex-col bg-gray-50 p-4 border rounded-lg shadow-lg mt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Timetable for Section {selectedSection} - Semester {selectedSemester}
            </h3>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="border border-gray-300 p-2">Time Slots</th>
                    {filteredTimetable.map((item, index) => (
                      <th key={index} className="border border-gray-300 p-2">
                        {item.day} <br />
                        {formatDate(item.date)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredTimetable[0]?.slots.map((slot, slotIndex) => (
                    <tr key={slotIndex} className="text-center">
                      <td className="border border-gray-300 p-2 font-medium">{slot.time}</td>
                      {filteredTimetable.map((item, index) => (
                        <td key={index} className="border border-gray-300 p-2">
                          {item.slots[slotIndex]?.lecture || "No Class"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Download Button */}
        {showTimetable && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentTimetable;
