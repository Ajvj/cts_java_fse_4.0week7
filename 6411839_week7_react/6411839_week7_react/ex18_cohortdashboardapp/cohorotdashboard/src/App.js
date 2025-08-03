import React from 'react';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Cohort Dashboard</h2>
      <CohortDetails cohort={CohortData[0]} />
    </div>
  );
}

export default App;
