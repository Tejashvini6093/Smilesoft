import React from 'react';

const StudentDueFees = () => {
  // Example data (you can replace this with dynamic data if needed)
  const studentInfo = {
    name: 'John Doe',
    studentId: '12345',
    course: 'Computer Science',
    year: '3rd Year',
  };

  const dueFees = {
    totalDue: 5000,  // Example total due fee
    dueDate: '2024-12-15',
    breakdown: [
      { feeType: 'Tuition Fee', amount: 3000 },
      { feeType: 'Lab Fees', amount: 1000 },
      { feeType: 'Library Fees', amount: 500 },
      { feeType: 'Hostel Fees', amount: 1500 },
    ],
  };

  const paymentHistory = [
    { date: '2024-11-01', amount: 1500, status: 'Paid' },
    { date: '2024-10-01', amount: 1000, status: 'Paid' },
    { date: '2024-09-01', amount: 1000, status: 'Paid' },
    { date: '2024-08-01', amount: 500, status: 'Pending' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Student Due Fees</h1>

      {/* Student Info Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Student Information</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p><strong>Name:</strong> {studentInfo.name}</p>
          <p><strong>Student ID:</strong> {studentInfo.studentId}</p>
          <p><strong>Course:</strong> {studentInfo.course}</p>
          <p><strong>Year:</strong> {studentInfo.year}</p>
        </div>
      </section>

      {/* Due Fees Breakdown */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Due Fees Breakdown</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p><strong>Total Due: </strong>₹{dueFees.totalDue}</p>
          <p><strong>Due Date: </strong>{dueFees.dueDate}</p>

          <table className="min-w-full mt-4 table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Fee Type</th>
                <th className="px-4 py-2 text-left">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {dueFees.breakdown.map((fee, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{fee.feeType}</td>
                  <td className="px-4 py-2">{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payment History */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment History</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <table className="min-w-full mt-4 table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Amount (₹)</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{payment.date}</td>
                  <td className="px-4 py-2">{payment.amount}</td>
                  <td className={`px-4 py-2 ${payment.status === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payment Reminder Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment Reminder</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p><strong>Reminder:</strong> Please ensure that you pay your due fees before the due date: <strong>{dueFees.dueDate}</strong>.</p>
        </div>
      </section>
    </div>
  );
};

export default StudentDueFees;
