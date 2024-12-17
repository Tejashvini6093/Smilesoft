
import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaFilePdf, FaPrint, FaFileExcel } from "react-icons/fa"; // Import icons from react-icons

const StudentOnlineAdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    class: "",
    section: "",
    guardianName: "",
    guardianContact: "",
    previousSchool: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generatePDF = () => {
    const input = document.getElementById("formContent");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Admission_Form.pdf");
    });
  };

  const handlePrint = () => {
    const input = document.getElementById("formContent");
    const printWindow = window.open("", "_blank");
    printWindow.document.write(input.innerHTML);
    printWindow.document.close();
    printWindow.print();
  };

  const handleExcel = () => {
    // Here you would typically convert data to an Excel sheet, but for simplicity,
    // we'll download a placeholder Excel file.
    const fileContent = `Name\tDOB\tGender\tEmail\tMobile\tAddress\tClass\tSection\tGuardian Name\tGuardian Contact\tPrevious School\n${formData.name}\t${formData.dob}\t${formData.gender}\t${formData.email}\t${formData.mobile}\t${formData.address}\t${formData.class}\t${formData.section}\t${formData.guardianName}\t${formData.guardianContact}\t${formData.previousSchool}`;
    
    const blob = new Blob([fileContent], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Admission_Form.xlsx";
    link.click();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-[#192137] shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text- bg-blue-700 py-2 rounded-md">
        Online Admission Form
      </h2>

      <form id="formContent" className="space-y-4 bg-[#272E48] p-6 rounded-lg shadow">
        {/* Name and DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Gender and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full  border rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Mobile and Address */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium">Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        {/* Class and Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Class *</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Section *</label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Guardian Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Guardian Name *</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Guardian Contact *</label>
            <input
              type="tel"
              name="guardianContact"
              value={formData.guardianContact}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Previous School */}
        <div>
          <label className="block font-medium">Previous School</label>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Icons for download options */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={generatePDF}
            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
          >
            <FaFilePdf className="inline mr-2" /> PDF
          </button>
          <button
            onClick={handlePrint}
            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
          >
            <FaPrint className="inline mr-2" /> Print
          </button>
          <button
            onClick={handleExcel}
            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
          >
            <FaFileExcel className="inline mr-2" /> Excel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentOnlineAdmissionForm;
