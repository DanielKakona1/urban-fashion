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
      <div className="content">
        <h5 className='btn'>2020 Collections</h5>
        <h1>You should always <br></br>feel pretty</h1>
        <p>Clothes that are sure heat up your winter</p>
        <div className="arrow-icons">
          <img src={require('./assets/back-arrow.png')} alt=""/>
          <img src={require('./assets/next-arrow.png')} alt=""/>
        </div>
      </div>
      <img src={require('./assets/img.png')} alt="" className='feature-img'/>

      <div className="social-links">
        <p>FACEBOOK</p>
        <p>INSTAGRAM</p>
        <p>TWITTER</p>
      </div>
    </div>
  )
}

export default App
