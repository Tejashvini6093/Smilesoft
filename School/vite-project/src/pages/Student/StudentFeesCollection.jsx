
import React, { useState } from 'react';

const StudentFeesCollection = () => {
  // Example JSON data for multiple students
  const studentsData = [
    {
      name: 'Ram',
      studentId: '678745',
      course: 'information Science',
      year: '3rd Year',
      feesDue: {
        totalDue: 5000,
        dueDate: '2024-12-15',
        breakdown: [
          { feeType: 'Tuition Fee', amount: 3000 },
          { feeType: 'Lab Fees', amount: 1000 },
          { feeType: 'Library Fees', amount: 500 },
          { feeType: 'Hostel Fees', amount: 1500 },
        ],
      },
      collectedFees: [
        { date: '2024-11-01', amount: 1500, status: 'Paid' },
        { date: '2024-10-01', amount: 1000, status: 'Paid' },
        { date: '2024-09-01', amount: 1000, status: 'Paid' },
        { date: '2024-08-01', amount: 500, status: 'Pending' },
      ],
    },
    {
      name: 'Sham',
      studentId: '67890',
      course: 'Mathematics',
      year: '2nd Year',
      feesDue: {
        totalDue: 3000,
        dueDate: '2024-12-20',
        breakdown: [
          { feeType: 'Tuition Fee', amount: 2000 },
          { feeType: 'Lab Fees', amount: 500 },
          { feeType: 'Library Fees', amount: 500 },
        ],
      },
      collectedFees: [
        { date: '2024-10-01', amount: 2000, status: 'Paid' },
        { date: '2024-09-01', amount: 500, status: 'Paid' },
      ],
    },
  ];

  const [searchName, setSearchName] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = () => {
    const student = studentsData.find(
      (s) => s.name.toLowerCase() === searchName.toLowerCase()
    );
    setSelectedStudent(student);
  };

  return (
    <div className="container mx-auto p-10 bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Student Fees Collection</h1>

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
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </section>

      {selectedStudent ? (
        <div className="bg-gray-700 p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Student Details</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-4 py-2 border border-gray-300">Field</th>
                <th className="px-4 py-2 border border-gray-300">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Name</td>
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

          <h2 className="text-xl font-semibold text-white mt-6 mb-4">Fees Due Breakdown</h2>
          <table className="min-w-full border-collapse border border-blue-500">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-4 py-2 border border-gray-300">Fee Type</th>
                <th className="px-4 py-2 border border-gray-300">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {selectedStudent.feesDue.breakdown.map((fee, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">{fee.feeType}</td>
                  <td className="px-4 py-2 border border-gray-300">{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-semibold text-white mt-6 mb-4">Collected Fees</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="px-4 py-2 border border-gray-300">Date</th>
                <th className="px-4 py-2 border border-gray-300">Amount (₹)</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {selectedStudent.collectedFees.map((payment, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">{payment.date}</td>
                  <td className="px-4 py-2 border border-gray-300">{payment.amount}</td>
                  <td className={`px-4 py-2 border border-gray-300 ${payment.status === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-red-500">No student found with the name "{searchName}"</p>
      )}
    </div>
  );
};

export default StudentFeesCollection;
