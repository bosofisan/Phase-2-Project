import React from 'react';

function Transactions({ data, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  const transactions = data.transactions;

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            Account ID: {transaction.accountId}, Amount: ${transaction.amount}, Description: {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
