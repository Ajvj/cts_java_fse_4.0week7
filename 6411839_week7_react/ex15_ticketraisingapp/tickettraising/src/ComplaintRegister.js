import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!employeeName || !complaint) {
      alert("Please fill out both fields.");
      return;
    }

    const referenceNumber = Math.floor(100000 + Math.random() * 900000);
    alert(`Complaint submitted!\nReference No: ${referenceNumber}`);
    
    // Clear form
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <label>Employee Name:</label>
      <input
        type="text"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        placeholder="Enter your name"
      />

      <label>Complaint:</label>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Describe your issue"
        rows="4"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplaintRegister;
