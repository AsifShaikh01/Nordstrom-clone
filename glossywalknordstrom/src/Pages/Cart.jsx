import React from 'react'
import { useContext } from 'react'
import Footer from '../Components/Footer';
import LinkBar from '../Components/LinkBar';
import Navbar from '../Components/Navbar';
import { CartContext } from '../Contexts/CartContextProvider';
import "../Components/cart.css"
import {Button, Divider} from "@chakra-ui/react"

const Cart = () => {
  const {cart} = useContext(CartContext);
  
  
  return (
    <div>
      <Navbar/>
      <LinkBar/>
      <h1>Cart Page</h1>
       {
        cart.map((item)=>(
          <div className='mainDiv'>
          <div key={item.id} className='cart'>
            <img src={item.image}/>
            <h1>{item.title}</h1>
            <h1>$ {item.price}</h1>
            <Button colorScheme="red" size="xs">DELETE</Button>
          </div>
          <Divider/>
          </div>
        ))
       }
       <h1>TOTAL:</h1>
       <Footer/>
    </div>
  )
}

export default Cart
