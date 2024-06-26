import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/greeting')
      .then(response => {
        setGreeting(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the greeting!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting}</h1>
      </header>
    </div>
  );
}

export default App;
