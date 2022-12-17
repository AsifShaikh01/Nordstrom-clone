import React from 'react'
import {useState ,useEffect} from "react";
import "../Components/Home.css"
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import LinkBar from '../Components/LinkBar'
import {Divider} from "@chakra-ui/react"


const Home = () => {
  
  return (
    <div className='home'>
      <Navbar/>
      <LinkBar/>
      <img src='https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608'/>
      
      <div className='adver1'>
         <h1>DESIGNER CLEARANCE</h1>
         <p>UP TO 60% OFF</p>
         <p>Save on the best brands and styles</p>
      </div>
      <div className='category'>
        <h4>SHOP BY CATEGORY</h4>
        <div>
          <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTkFSTpBFnZxkozZzZGn4gR5lUrZZ0zfLQ1rvckDr80GdOp6y8XuuPh-KltrlUcf0wPlF0_8YuymDgV7kc" alt="" />
          <img src="https://i.guim.co.uk/img/media/20b1ed84a85590f6ef2ef8ec4e083ededcbcb75a/445_367_3662_4578/master/3662.jpg?width=465&quality=85&dpr=1&s=none" alt="" />
          <img src="https://media.vanityfair.com/photos/586413ae12f608c91db97830/2:3/w_640,h_960,c_limit/ariana-grande-best-year-2016.jpg" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQT36U8rdkMyShvCSdR8TYbr4U594AoVTorSP90pAylelin9BM7WzpnSyL96untetturw&usqp=CAU" alt="" />
          <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Decor_section5_web_06122022_1.jpg" alt="" />
          
        </div>
        <div>
          <p>women</p>
          <p>men</p>
          <p>fashion</p>
          <p>kids</p>
          <p>home</p>
        </div>
       <Divider/>
      </div>
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
      <div className='adver2'>
         <h1>GET IT IN TIME FOR CHRISMAS</h1>
         <p>LAST CHANCE for FREE standard shipping!</p>

      </div>
      <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />
      <Footer/>
    </div>
  )
}

export default Home
