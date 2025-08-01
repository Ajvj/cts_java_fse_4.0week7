import React from 'react';
import './App.css';

const offices = [
  {
    name: "Office One",
    rent: 55000,
    address: "123 Business Street, Chennai",
    image: "/image1.jpg"   // public/image1.jpg
  },
  {
    name: "Office Two",
    rent: 75000,
    address: "456 Tech Park, Bengaluru",
    image: "/image2.jpg"   // public/image2.jpg
  }
];

function App() {
  return (
    <div className="App">
      <h1>Office Space Rental App</h1>
      {offices.map((office, idx) => (
        <div className="office-card" key={idx}>
          <h2>{office.name}</h2>
          <img
            className="office-image"
            src={office.image}
            alt={office.name}
            width="300"
          />
          <p className={office.rent < 60000 ? 'rent-red' : 'rent-green'}>
            Rent: ₹{office.rent}
          </p>
          <p className="office-details">
            Address: {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
