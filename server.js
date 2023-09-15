const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const calculateRewardPoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += (amount - 100) * 2;
  }
  if (amount > 50) {
    points += amount - 50;
  }
  return points;
};

app.get('/transactions', (req, res) => {
  // Customer transactions for three months
  // Add more data to test
  const transactions = [
    { customer: 'Customer A', month: 'January', amount: 120 },
    { customer: 'Customer A', month: 'February', amount: 80 },
    { customer: 'Customer B', month: 'January', amount: 150 },
  ];

  // Calculating reward points for each transaction
  const transactionsWithPoints = transactions.map((transaction) => ({
    ...transaction,
    points: calculateRewardPoints(transaction.amount),
  }));

  res.json(transactionsWithPoints);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
