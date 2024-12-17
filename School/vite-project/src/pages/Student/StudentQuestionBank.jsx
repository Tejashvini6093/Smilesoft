

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const QuestionBank = () => {
//   // Predefined question bank data
//   const questionBank = {
//     Mathematics: [
//       "What is the derivative of sin(x)?",
//       "Solve the integral of x^2 dx.",
//       "What is the value of pi?",
//     ],
//     Physics: [
//       "State Newton's second law of motion.",
//       "What is the speed of light in vacuum?",
//       "Explain the principle of conservation of energy.",
//     ],
//     Chemistry: [
//       "What is the atomic number of oxygen?",
//       "Define Avogadro's law.",
//       "Explain the process of electrolysis.",
//     ],
//     Biology: [
//       "What is photosynthesis?",
//       "Name the building blocks of proteins.",
//       "What is the function of mitochondria?",
//     ],
//   };

//   const [selectedSubject, setSelectedSubject] = useState("Mathematics");

//   // Handle subject selection
//   const handleSubjectChange = (e) => {
//     setSelectedSubject(e.target.value);
//   };

//   // Generate and download question bank as PDF
//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text(`${selectedSubject} Question Bank`, 10, 10);
//     doc.setFontSize(12);
//     doc.autoTable({
//       startY: 20,
//       head: [["#", "Question"]],
//       body: questionBank[selectedSubject].map((question, index) => [index + 1, question]),
//     });
//     doc.save(`${selectedSubject}_QuestionBank.pdf`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex justify-center items-center">
//       <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Question Bank</h1>

//         {/* Subject Selection */}
//         <div className="mb-4">
//           <label htmlFor="subject" className="block text-lg font-medium text-gray-600 mb-2">
//             Select Subject:
//           </label>
//           <select
//             id="subject"
//             value={selectedSubject}
//             onChange={handleSubjectChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             {Object.keys(questionBank).map((subject, index) => (
//               <option key={index} value={subject}>{subject}</option>
//             ))}
//           </select>
//         </div>

//         {/* Display Questions */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             {selectedSubject} Questions
//           </h2>
//           <ul className="list-disc pl-6 space-y-2">
//             {questionBank[selectedSubject].map((question, index) => (
//               <li key={index} className="text-gray-700">
//                 {index + 1}. {question}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Download Button */}
//         <button
//           onClick={handleDownload}
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Download as PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuestionBank;
import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const QuestionBank = () => {
  // Predefined question bank data
  const questionBank = {
    Mathematics: {
      "Semester 1": [
        "What is the derivative of sin(x)?",
        "Solve the integral of x^2 dx.",
        "What is the value of pi?",
      ],
      "Semester 2": [
        "What is a matrix? Explain its types.",
        "Define eigenvalues and eigenvectors.",
        "Solve the differential equation dy/dx = x^2 + y^2.",
      ],
    },
    Physics: {
      "Semester 1": [
        "State Newton's second law of motion.",
        "What is the speed of light in a vacuum?",
        "Explain the principle of conservation of energy.",
      ],
      "Semester 2": [
        "Define quantum mechanics.",
        "What is Planck's constant? State its significance.",
        "Explain the Doppler Effect.",
      ],
    },
    Chemistry: {
      "Semester 1": [
        "What is the atomic number of oxygen?",
        "Define Avogadro's law.",
        "Explain the process of electrolysis.",
      ],
      "Semester 2": [
        "What is a chemical bond? Explain its types.",
        "State the law of conservation of mass.",
        "Explain the concept of pH and its importance.",
      ],
    },
    Biology: {
      "Semester 1": [
        "What is photosynthesis?",
        "Name the building blocks of proteins.",
        "What is the function of mitochondria?",
      ],
      "Semester 2": [
        "Define genetics and its applications.",
        "What is DNA? Describe its structure.",
        "Explain the process of cell division.",
      ],
    },
  };

  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");

  // Handle subject selection
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setSelectedSemester("Semester 1"); // Reset semester when subject changes
  };

  // Handle semester selection
  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  // Generate and download question bank as PDF
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`${selectedSubject} (${selectedSemester}) Question Bank`, 10, 10);
    doc.setFontSize(12);
    doc.autoTable({
      startY: 20,
      head: [["#", "Question"]],
      body: questionBank[selectedSubject][selectedSemester].map(
        (question, index) => [index + 1, question]
      ),
    });
    doc.save(`${selectedSubject}_${selectedSemester}_QuestionBank.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Question Bank
        </h1>

        {/* Subject Selection */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-lg font-medium text-gray-600 mb-2"
          >
            Select Subject:
          </label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={handleSubjectChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(questionBank).map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* Semester Selection */}
        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block text-lg font-medium text-gray-600 mb-2"
          >
            Select Semester:
          </label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={handleSemesterChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(questionBank[selectedSubject]).map((sem, index) => (
              <option key={index} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        {/* Display Questions */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {selectedSubject} ({selectedSemester}) Questions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {questionBank[selectedSubject][selectedSemester].map(
              (question, index) => (
                <li key={index} className="text-gray-700">
                  {index + 1}. {question}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default QuestionBank;
