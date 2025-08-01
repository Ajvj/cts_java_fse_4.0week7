import React from 'react';
import EmployeeCard from './EmployeeCard';

const employees = [
  { id: 1, name: 'Ajay Sri', role: 'Developer' },
  { id: 2, name: 'Sneha Kumar', role: 'Designer' },
  { id: 3, name: 'Rahul Roy', role: 'Tester' }
];

function EmployeesList() {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeesList;
