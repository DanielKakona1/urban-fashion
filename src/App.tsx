import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <img src={require('./assets/logo.png')} alt="" className="logo" />
        <div className="navLink">
          <p>Home</p>
          <p>About</p>
          <p>Collections</p>
          <p>Category</p>
        </div>
        <img src={require('./assets/cart.png')} alt="" className="cart" />
      </div>
    </div>
  )
}

export default App
