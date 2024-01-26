import React from 'react';

function Accounts({ data, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  const accounts = data.accounts;

  return (
    <div>
      <h2>Accounts</h2>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {account.type}: ${account.balance.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accounts;
