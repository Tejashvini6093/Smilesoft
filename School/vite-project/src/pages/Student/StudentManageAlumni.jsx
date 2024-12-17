import React, { useState } from 'react';

const StudentManageStudents = () => {
  const [studentList, setStudentList] = useState([
    { id: 1, name: 'John Doe', class: '10th Grade', section: 'A', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', class: '12th Grade', section: 'B', email: 'jane.smith@example.com' },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    section: '',
    email: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.class && formData.section && formData.email) {
      if (isEditing) {
        const updatedStudentList = studentList.map((student) =>
          student.id === editId ? { ...student, ...formData } : student
        );
        setStudentList(updatedStudentList);
        setIsEditing(false);
        setEditId(null);
      } else {
        const newStudent = {
          id: studentList.length + 1,
          ...formData
        };
        setStudentList([...studentList, newStudent]);
      }
      setFormData({ name: '', class: '', section: '', email: '' });
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleDelete = (id) => {
    const updatedStudentList = studentList.filter((student) => student.id !== id);
    setStudentList(updatedStudentList);
  };

  const handleEdit = (student) => {
    setIsEditing(true);
    setFormData({ ...student });
    setEditId(student.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Manage Students</h1>

        {/* Student List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student List</h2>
          <div className="space-y-6">
            {studentList.map((student) => (
              <div key={student.id} className="border p-4 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                <p className="text-gray-600">{student.class}</p>
                <p className="text-gray-500">{student.section}</p>
                <p className="text-gray-500">{student.email}</p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleEdit(student)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add or Edit Student Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{isEditing ? 'Edit Student' : 'Add New Student'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter student name"
                required
              />
            </div>
            <div>
              <label htmlFor="class" className="block text-gray-600">Class</label>
              <input
                type="text"
                id="class"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter class"
                required
              />
            </div>
            <div>
              <label htmlFor="section" className="block text-gray-600">Section</label>
              <input
                type="text"
                id="section"
                name="section"
                value={formData.section}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter section"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isEditing ? 'Update Student' : 'Add Student'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentManageStudents;
