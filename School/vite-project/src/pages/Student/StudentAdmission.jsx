
// import React, { useState } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import * as XLSX from "xlsx";

// const StudentAdmissionForm = () => {
//   const [formData, setFormData] = useState({
//     admissionNo: "",
//     firstName: "",
//     lastName: "",
//     gender: "",
//     dob: "",
//     fatherName: "",
//     fatherPhone: "",
//     email: "",
//     admissionDate: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const generatePDF = () => {
//     const input = document.getElementById("pdfContent");

//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("Admission_Form.pdf");
//     });
//   };

//   const generateExcel = () => {
//     const worksheetData = Object.entries(formData).map(([key, value]) => ({
//       Field: key.replace(/([A-Z])/g, " $1"),
//       Details: value || "N/A",
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(worksheetData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Admission Form");

//     XLSX.writeFile(workbook, "Admission_Form.xlsx");
//   };

//   const printForm = () => {
//     window.print();
//   };

//   return (
//     <div className="w-full p-6 max-w-4xl mx-auto bg-[#192137]">
//       {!submitted ? (
//         <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold text-center text-white mb-6 bg-indigo-600 p-4 rounded-md">
//             Student Admission Form
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {Object.keys(formData).map((key) => (
//               <div key={key}>
//                 <label className="block font-semibold text-gray-700">
//                   {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
//                   {key === "admissionNo" || key === "firstName" || key === "gender" || key === "dob" || key === "fatherName" || key === "fatherPhone" ? " *" : ""}
//                 </label>
//                 {key === "gender" ? (
//                   <select
//                     name={key}
//                     value={formData[key]}
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required={key === "gender"}
//                   >
//                     <option value="">Select</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 ) : key === "dob" || key === "admissionDate" ? (
//                   <input
//                     type="date"
//                     name={key}
//                     value={formData[key]}
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required={key === "dob"}
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     name={key}
//                     value={formData[key]}
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required={key === "admissionNo" || key === "firstName" || key === "fatherName" || key === "fatherPhone"}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           <div id="pdfContent" className="p-6 bg-white shadow-md rounded-md">
//             <h2 className="text-xl font-bold mb-8 text-black-800 text-center">Student Admission Details</h2>
//             <table className="table-auto w-full border-collapse border border-black-400">
//               <thead>
//                 <tr>
//                   <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Field</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.entries(formData).map(([key, value]) => (
//                   <tr key={key}>
//                     <td className="border border-gray-300 px-4 py-2 text-gray-700 capitalize">
//                       {key.replace(/([A-Z])/g, " $1")}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-gray-700">{value || "N/A"}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="text-center mt-6 flex justify-center space-x-6 relative">
//             {/* Print Button with Icon Only */}
//             <button
//               onClick={printForm}
//               className="bg-gray-500 text-white rounded-full p-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 relative"
//             >
//               🖨️
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs opacity-0 hover:opacity-100 transition-opacity duration-200">Print</span>
//             </button>
//             {/* PDF Download Button with Icon Only */}
//             <button
//               onClick={generatePDF}
//               className="bg-gray-500 text-white rounded-full p-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 relative"
//             >
//               📄
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs opacity-0 hover:opacity-100 transition-opacity duration-200">PDF</span>
//             </button>
//             {/* Excel Download Button with Icon Only */}
//             <button
//               onClick={generateExcel}
//               className="bg-gray-500 text-white rounded-full p-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 relative"
//             >
//               📊
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs opacity-0 hover:opacity-100 transition-opacity duration-200">Excel</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentAdmissionForm;
import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({
    admissionNo: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    fatherName: "",
    fatherPhone: "",
    email: "",
    admissionDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generatePDF = () => {
    const input = document.getElementById("pdfContent");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Admission_Form.pdf");
    });
  };

  const generateExcel = () => {
    const worksheetData = Object.entries(formData).map(([key, value]) => ({
      Field: key.replace(/([A-Z])/g, " $1"),
      Details: value || "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Admission Form");

    XLSX.writeFile(workbook, "Admission_Form.xlsx");
  };

  const printForm = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen bg-[#192137] flex items-center justify-center">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#272E48] p-8 rounded-lg shadow-lg w-full max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Student Admission Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block font-semibold text-gray-300">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  {key === "admissionNo" ||
                  key === "firstName" ||
                  key === "gender" ||
                  key === "dob" ||
                  key === "fatherName" ||
                  key === "fatherPhone"
                    ? " *"
                    : ""}
                </label>
                {key === "gender" ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600 bg-[#192137] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={key === "gender"}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : key === "dob" || key === "admissionDate" ? (
                  <input
                    type="date"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600 bg-[#192137] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={key === "dob"}
                  />
                ) : (
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600 bg-[#192137] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={
                      key === "admissionNo" ||
                      key === "firstName" ||
                      key === "fatherName" ||
                      key === "fatherPhone"
                    }
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-[#272E48] p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <div id="pdfContent" className="p-6 bg-[#192137] shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-8 text-white text-center">
              Student Admission Details
            </h2>
            <table className="table-auto w-full border-collapse border border-gray-600">
              <thead>
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">
                    Field
                  </th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(formData).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border border-gray-600 px-4 py-2 text-white capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </td>
                    <td className="border border-gray-600 px-4 py-2 text-white">
                      {value || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6 flex justify-center space-x-6">
  <span
    onClick={printForm}
    className="text-gray-500 text-2xl cursor-pointer hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
    title="Print"
  >
    🖨️
  </span>
  <span
    onClick={generatePDF}
    className="text-gray-500 text-2xl cursor-pointer hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
    title="Download PDF"
  >
    📄
  </span>
  <span
    onClick={generateExcel}
    className="text-gray-500 text-2xl cursor-pointer hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
    title="Download Excel"
  >
    📊
  </span>
</div>

        </div>
      )}
    </div>
  );
};

export default StudentAdmissionForm;
