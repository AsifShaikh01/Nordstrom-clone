import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {AuthContextProvider} from './Contexts/AuthContextProvider';
import {ChakraProvider} from "@chakra-ui/react"

import App from './App';
import CartContextProvider from './Contexts/CartContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <AuthContextProvider>
    <CartContextProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </CartContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



