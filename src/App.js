import React from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Full Stack Take Home 2</h1>
      </header>
      <body>
      <p>
        <Form />
      </p>
      <p>
        <Table />
      </p>

      </body>
    </div>
  );
}

export default App;
