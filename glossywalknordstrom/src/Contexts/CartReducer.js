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
  return state
}

export default CartReducer
