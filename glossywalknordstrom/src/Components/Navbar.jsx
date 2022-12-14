import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>NORDSTROM</div>
      <div>
        <input placeholder='search for products'/>
      </div>
      <div>
        <Link to="/login">signin</Link>
        <Link to="/cart">cart</Link>
      </div>
    </div>
  )
}

export default Navbar
