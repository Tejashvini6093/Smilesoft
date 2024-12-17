import React, { useState } from "react";

const StudentSection = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectType, setSubjectType] = useState("Theory");
  const [subjectCode, setSubjectCode] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddSubject = () => {
    if (subjectName && subjectCode) {
      const newSubject = { name: subjectName, type: subjectType, code: subjectCode };
      setSubjects([...subjects, newSubject]);
      setSubjectName("");
      setSubjectType("Theory");
      setSubjectCode("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleDeleteSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Manage Subjects</h1>

        {/* Subject Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Subject Name *</label>
            <input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="Enter subject name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Subject Type</label>
            <select
              value={subjectType}
              onChange={(e) => setSubjectType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Theory">Theory</option>
              <option value="Practical">Practical</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Subject Code</label>
            <input
              type="text"
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              placeholder="Enter subject code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <button
          onClick={handleAddSubject}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Add Subject
        </button>

        {/* Search and Subject List */}
        <div className="mt-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Search Subjects</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Subject Table */}
          <table className="w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Subject</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Subject Code</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Subject Type</th>
                <th className="py-2 px-4 border-b border-gray-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((subject, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-300">{subject.name}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{subject.code}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{subject.type}</td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      <button
                        onClick={() => handleDeleteSubject(index)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-4 px-4 text-center text-gray-500 border-b border-gray-300"
                  >
                    No subjects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;
