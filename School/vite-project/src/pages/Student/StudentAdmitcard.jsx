
// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import * as XLSX from "xlsx";
// import { FaFilePdf, FaFileExcel, FaPrint } from "react-icons/fa";


// const StudentAdmitCard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     section: "",
//     course: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, rollNumber, section } = formData;

//     if (name && rollNumber && section) {
//       setIsSubmitted(true);
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("Admit Card", 105, 20, { align: "center" });

//     const fields = [
//       ["Name", formData.name],
//       ["Roll Number", formData.rollNumber],
//       ["Section", formData.section],
//     ];

//     let yPosition = 40;
//     fields.forEach(([field, value]) => {
//       doc.text(`${field}:`, 20, yPosition);
//       doc.text(value, 100, yPosition);
//       yPosition += 10;
//     });

//     doc.save("admit_card.pdf");
//   };

//   const generateExcel = () => {
//     const data = [
//       {
//         Field: "Name",
//         Details: formData.name,
//       },
//       {
//         Field: "Roll Number",
//         Details: formData.rollNumber,
//       },
//       {
//         Field: "Section",
//         Details: formData.section,
//       },
//     ];

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Admit Card");
//     XLSX.writeFile(workbook, "admit_card.xlsx");
//   };

//   const printAdmitCard = () => {
//     window.print();
//   };

//   const renderAdmitCard = () => (
//     <div className="max-w-lg mx-auto bg-[#272E48] p-8 rounded-lg shadow-lg">
//       <h2 className="text-4xl font-bold text-center text-white mb-4">Admit Card</h2>
//       <table className="w-full border-collapse border border-[#192137]">
//         <thead>
//           <tr className="bg-blue-500 text-white">
//             <th className="border border-gray-300 p-2">Field</th>
//             <th className="border border-gray-300 p-2">Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-white-800 p-2 font-semibold">Name</td>
//             <td className="border border-white-800 p-2">{formData.name}</td>
//           </tr>
//           <tr>
//             <td className="border border-white-300 p-2 font-semibold">Roll Number</td>
//             <td className="border border-white-300 p-2">{formData.rollNumber}</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2 font-semibold">Section</td>
//             <td className="border border-gray-300 p-2">{formData.section}</td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="mt-6 flex justify-center space-x-6">
//         {/* PDF Icon */}
//         <FaFilePdf
//           onClick={generatePDF}
//           className="text-white text-2xl cursor-pointer hover:text-blue-400 transition"
//           title="Generate PDF"
//         />
//         {/* Excel Icon */}
//         <FaFileExcel
//           onClick={generateExcel}
//           className="text-white text-2xl cursor-pointer hover:text-blue-400 transition"
//           title="Generate Excel"
//         />
//         {/* Print Icon */}
//         <FaPrint
//           onClick={printAdmitCard}
//           className="text-white text-2xl cursor-pointer hover:text-blue-400 transition"
//           title="Print Admit Card"
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[#192137]">
//       <div className="max-w-lg w-full bg-gray-100">
//         {isSubmitted ? (
//           renderAdmitCard()
//         ) : (
//           <div className="bg-[#272E48] p-8 rounded-lg shadow-lg">
//             <h1 className="text-2xl font-bold text-center mb-6 text-white bg-[#272E48] py-2 rounded-md">
//               Admit Card
//             </h1>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-white">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Roll Number:</label>
//                 <input
//                   type="text"
//                   name="rollNumber"
//                   value={formData.rollNumber}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="Enter your roll number"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Section:</label>
//                 <input
//                   type="text"
//                   name="section"
//                   value={formData.section}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="Enter your section"
//                   required
//                 />
//               </div>
//               <div className="flex justify-center mt-6">
//                 <button
//                   type="submit"
//                   className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//                 >
//                   Generate Admit Card
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentAdmitCard;
import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import { FaFilePdf, FaFileExcel, FaPrint } from "react-icons/fa";

const StudentAdmitCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    section: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch JSON data from public folder
  useEffect(() => {
    fetch("/student/admitcardata.json") // Path to JSON file in public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        return response.json();
      })
      .then((data) => {
        setFormData(data); // Populate formData with JSON data
      })
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, rollNumber, section } = formData;

    if (name && rollNumber && section) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Admit Card", 105, 20, { align: "center" });

    const fields = [
      ["Name", formData.name],
      ["Roll Number", formData.rollNumber],
      ["Section", formData.section],
    ];

    let yPosition = 40;
    fields.forEach(([field, value]) => {
      doc.text(`${field}:`, 20, yPosition);
      doc.text(value, 100, yPosition);
      yPosition += 10;
    });

    doc.save("admit_card.pdf");
  };

  const generateExcel = () => {
    const data = [
      {
        Field: "Name",
        Details: formData.name,
      },
      {
        Field: "Roll Number",
        Details: formData.rollNumber,
      },
      {
        Field: "Section",
        Details: formData.section,
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Admit Card");
    XLSX.writeFile(workbook, "admit_card.xlsx");
  };

  const printAdmitCard = () => {
    window.print();
  };

  const renderAdmitCard = () => (
    <div className="max-w-lg mx-auto bg-[#272E48] p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-4">Admit Card</h2>
      <table className="w-full border-collapse border border-[#192137]">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 p-2">Field</th>
            <th className="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white-800 p-2 font-semibold">Name</td>
            <td className="border border-white-800 p-2">{formData.name}</td>
          </tr>
          <tr>
            <td className="border border-white-300 p-2 font-semibold">Roll Number</td>
            <td className="border border-white-300 p-2">{formData.rollNumber}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 font-semibold">Section</td>
            <td className="border border-gray-300 p-2">{formData.section}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-center space-x-6">
        <FaFilePdf
          onClick={generatePDF}
          className="text-white text-2xl cursor-pointer hover:text-blue-400 transition"
          title="Generate PDF"
        />
        <FaFileExcel
          onClick={generateExcel}
          className="text-white text-2xl cursor-pointer hover:text-blue-400 transition"
          title="Generate Excel"
        />
        <FaPrint
          onClick={printAdmitCard}
          className="text-white text-2xl cursor-pointer hover:text-blue-400 transition"
          title="Print Admit Card"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#192137]">
      <div className="max-w-lg w-full bg-gray-100">
        {isSubmitted ? (
          renderAdmitCard()
        ) : (
          <div className="bg-[#272E48] p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6 text-white bg-[#272E48] py-2 rounded-md">
              Admit Card
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Roll Number:</label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your roll number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Section:</label>
                <input
                  type="text"
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your section"
                  required
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Generate Admit Card
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentAdmitCard;
