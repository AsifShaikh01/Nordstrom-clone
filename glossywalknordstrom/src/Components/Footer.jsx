import React from 'react'
import "./Footer.css"
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { FaPinterestSquare } from '@react-icons/all-files/fa/FaPinterestSquare';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';

const Footer = () => {
  return (
    <div className='footerDiv'>
      <div>
        <h4>Customer Service</h4>
        <p>Contact Us</p>
        <p>Order Status</p>
        <p>Shipping</p>
        <p>Return Policy & Exchanges</p>
        <p>Price Adjustments</p>
        <p>Gift Cards</p>
        <p>FAQ</p>
        <p>Product Details</p>
      </div>
      <div>
        <h4>About Us</h4>
        <p>All Brands</p>
        <p>Careers</p>
        <p>Corporate Social Responsibility</p>
        <p>Diversity, Inclusion & Belonging</p>
        <p>Get Email Updates</p>
        <p>Nordstrom Blog</p>
        <p>The Thread</p>
        <p>Nordy Podcast</p>
      </div>
      <div>
        <h4>Store & Services</h4>
        <p>Find a Store</p>
        <p>Free Style Help</p>
        <p>Alterations & Tailoring</p>
        <p>Pop-In Shop</p>
        <p>Virtual Events</p>
        <p>Spa Nordstrom</p>
        <p>Nordstrom Restaurants</p>
        <p>Nordstrom Local</p>
      </div>
      <div>
        <h4>Nordstrom Card & Rewards</h4>
        <p>The Nordy Club Rewards</p>
        <p>Pay My Bill</p>
        <p>Manage My Nordstrom Card</p>
       
      </div>
      <div>
        <h4>Nordstrom Inc.</h4>
        <p>Nordstrom Rack</p>
        <p>Nordstrom Canada</p>
        <p>Investor Relations</p>
        <p>Press Releases</p>
        <p>Price Adjustments</p>
        <p>Nordstrom Media Network</p>
      
      </div>
      <div>
        <h4>Get our apps</h4>
        <div>
        <FaInstagramSquare/>
        <FaPinterestSquare/>
        <FaTwitterSquare/>
        <FaFacebookSquare/>
        </div>
      </div>
     
    </div>
  )
}

export default Footer
