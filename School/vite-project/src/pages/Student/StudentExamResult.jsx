import React from 'react';




function StudentExamResult() {
  const student = {
    name: 'John Doe',
    rollNumber: '12345',
    class: '10',
    section: 'A',
    subjects: [
      { name: 'Mathematics', marksObtained: 85, totalMarks: 100, grade: 'A' },
      { name: 'Science', marksObtained: 78, totalMarks: 100, grade: 'B' },
      { name: 'English', marksObtained: 92, totalMarks: 100, grade: 'A' },
      { name: 'History', marksObtained: 88, totalMarks: 100, grade: 'A' },
      { name: 'Geography', marksObtained: 79, totalMarks: 100, grade: 'B' },
    ],
    totalMarks: 422, // Sum of marksObtained
    overallGrade: 'A', // This can be calculated based on individual grades
  };

  return (
    <div>
        <Navbar/>
   
    {/* <div className="App"> */}
      <ExamResult student={student} />
    </div>
  //   </div>
  );
}

export default StudentExamResult;
