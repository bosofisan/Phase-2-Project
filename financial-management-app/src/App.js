import React, {useState} from 'react';
import Client from './Client';
import Account from './Accout';
import Portfolio from './Portfolio';
import './styles.css'

function App() {
  const [activeComponent, setActiveComponent] = useState ('client');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'client':
        return <Client />;
      case 'account':
        return <Account />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return null;
      }

  }
  return (
    <div className="App">
      <header className="header">
        <h1>WealthWise</h1>
        {/* Add navigation or buttons to switch between components */}
        <button onClick={() => setActiveComponent('client')}>Client</button>
        <button onClick={() => setActiveComponent('account')}>Account</button>
        <button onClick={() => setActiveComponent('portfolio')}>Portfolio</button>

        {/* Render the active component */}
        {renderComponent()}
      </header>
    </div>
  );
}

export default App
