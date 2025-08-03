import React from 'react';

function CohortDetails({ cohort }) {
  if (!cohort) return <p>No cohort data available.</p>;

  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '15px', width: '300px', margin: 'auto' }}>
      <h3>{cohort.code}</h3>
      <p><strong>Name:</strong> {cohort.name}</p>
      <p><strong>Start Date:</strong> {cohort.startDate}</p>
      <p><strong>End Date:</strong> {cohort.endDate}</p>
      <p><strong>Status:</strong> {cohort.status}</p>
    </div>
  );
}

export default CohortDetails;
