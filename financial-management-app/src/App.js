import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Accounts from './components/Accounts';
import Portfolios from './components/Portfolios';
import Transactions from './components/Transactions';
import NavBar from './components/NavBar';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/db');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home data={data} loading={loading} />
          </Route>
          <Route path="/accounts">
            <Accounts data={data} loading={loading} />
          </Route>
          <Route path="/portfolios">
            <Portfolios data={data} loading={loading} />
          </Route>
          <Route path="/transactions">
            <Transactions data={data} loading={loading} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
