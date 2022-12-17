import React from 'react'
import { useContext } from 'react'
import Footer from '../Components/Footer';
import LinkBar from '../Components/LinkBar';
import Navbar from '../Components/Navbar';
import { CartContext } from '../Contexts/CartContextProvider';
import "../Components/cart.css"
import {Button, Divider} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom';



const Cart = () => {
  const {state,cart ,removeItem ,clearCart} = useContext(CartContext);
  

  
  
  return (
    <div>
      <Navbar/>
      <LinkBar/>
      <Divider mb={5}/>
     
       {
        cart.map((item)=>(
          <div className='mainDiv'>
          <div key={item.id} className='cart'>
            <img src={item.image}/>
            <h1>{item.title}</h1>
            <h1>$ {item.price}</h1>
            <DeleteIcon color="red" onClick={()=>removeItem(item.id)}>DELETE</DeleteIcon>
          </div>
          <Divider/>
          </div>
        ))
       }
       <div style={{
        width:"50%",
        margin:"auto"
       }}>
       <Divider/>
        <div style={{
          display : "flex",
          justifyContent : "space-between",
          marginTop : "10px",
          marginBottom : "10px"
        }} >
          <NavLink to="/men">
            <Button  colorScheme="messenger" size="sm" >Continue Shopping</Button>
          </NavLink>
          <Button colorScheme="red" size="sm" onClick={clearCart}>Clear Cart</Button>
          <Button onClick={()=>{alert("Order Placed!!");clearCart()}} size="sm" colorScheme="messenger">Place Order</Button>
        </div>
       </div>
       
       <Footer/>

    </div>
  )
}

export default Cart
