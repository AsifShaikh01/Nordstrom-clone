import React, { useReducer } from 'react';
import { useEffect } from 'react';
import {useState} from "react";
import { createContext } from 'react';
import reducer from "./CartReducer"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const getDataFromLS = () =>{
    let newData = localStorage.getItem("cartItem");
    if(newData === []){
      return [];
    }else{
      return JSON.parse( newData );
    }
  }
  const initialState ={
    cart : getDataFromLS(),
    total_amount : ""
  }
  const [state , dispatch] = useReducer(reducer , initialState)

  const addToCart = (item) =>{
     dispatch({type:"ADD_TO_CART", payload:{item}})
  }

  const removeItem = (id)=>{
     dispatch({type:"REMOVE_ITEM" ,payload:id})
  }
   
  
  const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
 }
  // console.log(state.cart)

  useEffect(()=>{
    dispatch({type : "CART_TOTAL"});
   localStorage.setItem("cartItem" , JSON.stringify(state.cart))
  },[state.cart])
  return (
   <CartContext.Provider value={{...state , addToCart,removeItem ,clearCart}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartContextProvider
