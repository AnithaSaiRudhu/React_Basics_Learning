import React from 'react'
import logo from './images/react.png'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        Header
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={logo} alt="" style={{height :'35px',verticalAlign : "top"}}></img>   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/cryptodetail/cryptoSymbol/id">CryptoDetails</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">          
            <li><Link className="dropdown-item" to="/product">Product</Link></li>
            <li><Link className="dropdown-item" to="/product/createproduct">Create Product</Link></li>            
            <li><Link className="dropdown-item" to="/product/productdetails/prodID">Product Details</Link></li>
            <li><Link className="dropdown-item" to="/product/productlist">Product List</Link></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>      
    </div>
  </div>
</nav>     
        
    </div>
  )
}

export default Header
