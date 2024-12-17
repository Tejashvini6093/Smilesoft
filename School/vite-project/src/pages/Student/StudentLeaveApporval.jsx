


import React, { useState } from "react";

const StudentLeaveApproval = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ name: "", regNo: "", reason: "Sick" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prevRequest) => ({ ...prevRequest, [name]: value }));
  };

  const handleAddRequest = () => {
    if (newRequest.name.trim() && newRequest.regNo.trim()) {
      const newLeaveRequest = { id: leaveRequests.length + 1, ...newRequest, status: "Pending" };
      setLeaveRequests((prevRequests) => [...prevRequests, newLeaveRequest]);
      setNewRequest({ name: "", regNo: "", reason: "Sick" });
    } else {
      alert("Please fill in both name and registration number.");
    }
  };

  return (
    <div className="min-h-screen bg-[#192137] py-6 flex flex-col items-center">

      <div className="w-full max-w-xl bg-[#272E48] p-8 rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Leave Approval System</h1>
        <h2 className="text-xl font-semibold text-white mb-4">Add Leave Request</h2>
        <input
          type="text"
          name="name"
          value={newRequest.name}
          onChange={handleInputChange}
          placeholder="Student Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="regNo"
          value={newRequest.regNo}
          onChange={handleInputChange}
          placeholder="Registration Number"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <select
          name="reason"
          value={newRequest.reason}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        >
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
          <option value="Medical Emergency">Medical Emergency</option>
        </select>
        <button
          onClick={handleAddRequest}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Submit Request
        </button>
      </div>

      {/* Submitted Leave Requests in Tabular Format */}
      {leaveRequests.length > 0 && (
        <div className="w-full max-w-xl bg-[#272E48] p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Submitted Leave Requests</h2>
          <table className="table-auto w-full border-collapse border border-blue-800 text-sm">
            <thead>
              <tr className="bg-blue-500 text-blue">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Registration Number</th>
                <th className="border border-gray-300 p-2">Reason</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id} className="text-center">
                  <td className="border border-gray-300 p-2">{request.name}</td>
                  <td className="border border-gray-300 p-2">{request.regNo}</td>
                  <td className="border border-gray-300 p-2">{request.reason}</td>
                  <td className="border border-gray-300 p-2">{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentLeaveApproval;
