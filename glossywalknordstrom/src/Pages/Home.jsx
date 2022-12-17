import React from 'react'
import {useState ,useEffect} from "react";
import "../Components/Home.css"
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import LinkBar from '../Components/LinkBar'
import axios from "axios";


const Home = () => {
  //  console.log(props.data)
  
  //  console.log(data)
  return (
    <div className='home'>
      <Navbar/>
      <LinkBar/>
      <img src='https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608'/>
      
      <div className='offers'>
        <div>
        <h4>GIFTS BY PRICE</h4>
        </div>
        <div>
            <img src="https://n.nordstrommedia.com/id/a764f8a9-25c5-4e02-a2cf-75953ad9075e.png?h=395&w=1608" />
            
        </div>
        <div>
        <h4>Stocking Stuffers</h4>
        <h4>Under $50</h4>
        <h4>Under $100</h4>
        <h4>Luxe Gifts</h4>
        <h4>All Gifts</h4>
        </div>
      </div>
      <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />
      <Footer/>
    </div>
  )
}

export default Home
