import React, { useState } from 'react';

const StudentCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Freshman', students: [] },
    { id: 2, name: 'Sophomore', students: [] },
    { id: 3, name: 'Junior', students: [] },
    { id: 4, name: 'Senior', students: [] },
  ]);

  const [studentForm, setStudentForm] = useState({
    name: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentForm({ ...studentForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (studentForm.name && studentForm.category) {
      const updatedCategories = categories.map((category) =>
        category.id === parseInt(studentForm.category)
          ? {
              ...category,
              students: [...category.students, studentForm.name],
            }
          : category
      );
      setCategories(updatedCategories);
      setStudentForm({ name: '', category: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Student Categories</h1>

        {/* Add Student Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="mb-4 sm:mb-0 w-full">
              <label htmlFor="name" className="block text-gray-600">Student Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={studentForm.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter student name"
                required
              />
            </div>

            <div className="mb-4 sm:mb-0 w-full">
              <label htmlFor="category" className="block text-gray-600">Category</label>
              <select
                id="category"
                name="category"
                value={studentForm.category}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Student
          </button>
        </form>

        {/* Display Categories */}
        <div className="mt-8">
          {categories.map((category) => (
            <div key={category.id} className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category.name}</h2>
              <ul className="space-y-2">
                {category.students.length > 0 ? (
                  category.students.map((student, index) => (
                    <li key={index} className="bg-gray-50 p-2 rounded-md">
                      {student}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No students in this category.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCategories;
