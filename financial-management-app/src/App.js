import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Accounts from './components/Account'
import Portfolios from './components/Portfolio'
import Transactions from './components/Transactions'
import NavBar from './components/NavBar'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/db')
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/accounts" element={<Accounts />} />

          <Route exact path="/portfolios" element={<Portfolios />} />

          <Route exact path="/transactions" element={<Transactions />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
