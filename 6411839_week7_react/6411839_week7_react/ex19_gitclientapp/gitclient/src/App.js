// src/App.js
import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const username = 'techiesyed'; // or any GitHub username

  useEffect(() => {
    GitClient.getRepositories(username)
      .then(names => setRepos(names))
      .catch(err => setError(err.toString()));
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>GitHub Repositories for <em>{username}</em></h2>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!error && repos.length === 0 && <p>Loading…</p>}

      <ul>
        {repos.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
