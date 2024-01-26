import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/portfolios">Portfolios</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
