import React, { useEffect } from 'react';
import Navbar from "../../components/Student/StudentNavbar";

const StudentMarkscard = ({ student }) => {
  const handlePrint = () => {
    window.print(); // Trigger the print dialog
  };

  useEffect(() => {
    handlePrint();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="marks-card max-w-4xl mx-auto p-6 bg-white border rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Student Marks Card</h2>

        {/* Student Details Section */}
        <div className="mb-6">
          <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
          <p><strong>Roll Number:</strong> {student.rollNumber}</p>
          <p><strong>Class:</strong> {student.class} {student.section}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          <p><strong>Admission Date:</strong> {student.admissionDate}</p>
        </div>

        {/* Marks Table */}
        <table className="min-w-full table-auto border-collapse mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left">Subject</th>
              <th className="px-4 py-2 border text-left">Marks Obtained</th>
              <th className="px-4 py-2 border text-left">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {student.marks.map((subject, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{subject.name}</td>
                <td className="px-4 py-2 border">{subject.marksObtained}</td>
                <td className="px-4 py-2 border">{subject.totalMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Marks Section */}
        <div className="mt-4 text-right">
          <p><strong>Total Marks:</strong> {student.totalMarks}</p>
        </div>

        {/* Print Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Print Marks Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentMarkscard;
