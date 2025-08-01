import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome, Registered User!</h2>
      <p>You can now book your flights:</p>
      <ul>
        <li>Flight 101 - Chennai to Delhi <button>Book</button></li>
        <li>Flight 202 - Mumbai to Bangalore <button>Book</button></li>
        <li>Flight 303 - Kolkata to Hyderabad <button>Book</button></li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
