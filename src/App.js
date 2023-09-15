import React from 'react';
import './App.css';
import TransactionTable from './TransactionTable.js';

function App() {
  return (
    <div className="App">
      <h1>Reward Points Calculator</h1>
      <main>
        <TransactionTable />
      </main>
    </div>
  );
}

export default App;
