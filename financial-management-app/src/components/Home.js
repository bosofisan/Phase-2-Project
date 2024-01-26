import React from 'react'

function Home({ data, loading }) {
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Welcome to the Financial Management App</h2>
      <p>This is the home page of the application.</p>
    </div>
  )
}

export default Home
