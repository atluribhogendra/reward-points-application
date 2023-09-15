import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Bootstrap for styling purposes
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Getting data from backend
    axios.get('http://localhost:5000/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        // Writing error message to console log
        setError(error.message); 
        console.error('Error fetching data:', error);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Transaction Table</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Customer</th>
            <th>Month</th>
            <th>Transaction Amount</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customer}</td>
              <td>{transaction.month}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.points} points</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
