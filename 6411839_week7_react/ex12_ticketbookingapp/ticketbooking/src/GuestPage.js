import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Here are the available flights:</p>
      <ul>
        <li>Flight 101 - Chennai to Delhi</li>
        <li>Flight 202 - Mumbai to Bangalore</li>
        <li>Flight 303 - Kolkata to Hyderabad</li>
      </ul>
      <button onClick={onLogin}>Login to Book</button>
    </div>
  );
}

export default GuestPage;
