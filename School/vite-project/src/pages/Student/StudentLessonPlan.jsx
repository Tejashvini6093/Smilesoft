import React, { useState } from 'react';

const StudentLessonPlan = () => {
  // State to store lesson plans
  const [lessonPlans, setLessonPlans] = useState([]);
  // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    objectives: '',
    materials: '',
    notes: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Handle input change for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission to add or edit lesson plans
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title && formData.description && formData.date && formData.objectives && formData.materials) {
      if (isEditing) {
        const updatedLessonPlans = lessonPlans.map((plan) =>
          plan.id === editId ? { ...plan, ...formData } : plan
        );
        setLessonPlans(updatedLessonPlans);
        setIsEditing(false);
        setEditId(null);
      } else {
        const newLessonPlan = {
          id: lessonPlans.length + 1,
          ...formData
        };
        setLessonPlans([...lessonPlans, newLessonPlan]);
      }
      setFormData({
        title: '',
        description: '',
        date: '',
        objectives: '',
        materials: '',
        notes: ''
      });
    } else {
      alert('Please fill all the fields');
    }
  };

  // Handle lesson plan deletion
  const handleDelete = (id) => {
    const updatedLessonPlans = lessonPlans.filter((plan) => plan.id !== id);
    setLessonPlans(updatedLessonPlans);
  };

  // Handle edit button click to load data into the form
  const handleEdit = (lessonPlan) => {
    setIsEditing(true);
    setFormData({ ...lessonPlan });
    setEditId(lessonPlan.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Lesson Plan Management</h1>

        {/* Lesson Plan List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lesson Plans</h2>
          <div className="space-y-6">
            {lessonPlans.map((lesson) => (
              <div key={lesson.id} className="border p-4 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
                <p className="text-gray-600">{lesson.date}</p>
                <p className="text-gray-500">{lesson.objectives}</p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleEdit(lesson)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(lesson.id)}
                    className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add or Edit Lesson Plan Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{isEditing ? 'Edit Lesson Plan' : 'Create New Lesson Plan'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-600">Lesson Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter lesson title"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-gray-600">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter lesson description"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-600">Lesson Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="objectives" className="block text-gray-600">Objectives</label>
              <textarea
                id="objectives"
                name="objectives"
                value={formData.objectives}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter lesson objectives"
                required
              />
            </div>
            <div>
              <label htmlFor="materials" className="block text-gray-600">Materials</label>
              <textarea
                id="materials"
                name="materials"
                value={formData.materials}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter materials needed"
                required
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-gray-600">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter any additional notes"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isEditing ? 'Update Lesson Plan' : 'Create Lesson Plan'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLessonPlan;
