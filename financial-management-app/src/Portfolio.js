import React from 'react';

function Portfolios({ data, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  const portfolios = data.portfolios;

  return (
    <div>
      <h2>Portfolios</h2>
      <ul>
        {portfolios.map(portfolio => (
          <li key={portfolio.id}>
            User ID: {portfolio.userId}
            <ul>
              {portfolio.stocks.map(stock => (
                <li key={stock.id}>
                  {stock.symbol}: {stock.quantity} shares
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolios;
