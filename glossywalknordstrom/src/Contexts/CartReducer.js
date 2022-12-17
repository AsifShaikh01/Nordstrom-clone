import React from 'react'

const CartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
        let {item} = action.payload;
        // console.log(item);

        let cartProduct;

        cartProduct = {
            id : item.id,
            price : item.price,
            title : item.title,
            image : item.thumbnail
        };

        return{
            ...state,
            cart : [...state.cart , cartProduct]
        }
    }
    if(action.type === "REMOVE_ITEM"){
        let updatedCart = state.cart.filter(
            (el)=>el.id != action.payload)
        return {
            ...state,
            cart : updatedCart
        }
    }
    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart : []
        }
    }
    if(action.type === "CART_TOTAL"){
       let total_price = state.cart.reduce((initialVal , curElem) =>{
        let {price} = curElem;

        initialVal = initialVal + price;

        return initialVal;
       },0)

       return {
        ...state ,
        total_amount  : total_price 
       }
    }
  return state
}

export default CartReducer
