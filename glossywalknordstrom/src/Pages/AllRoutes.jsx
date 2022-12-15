import React from 'react'
import {Routes , Route} from "react-router-dom";
import Home from "./Home";
import Kid from "./Kid";
import Men from "./Men";
import Women from "./Women";
import Beauty from "./Beauty";
import Login from "./Login";
import Cart from "./Cart";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import PrivateRoute from '../Components/PrivateRoute';



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/kid' element={<Kid/>}/>
            <Route path='/beauty' element={<Beauty/>}/>
            <Route path='/login' element={<Login/>}>
               <Route index element={<Signin/>}/>
               <Route  path='signin' element={<Signin/>}/>
               <Route path='signup' element={<Signup/>}/>

            </Route>
            <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>

        </Routes>
      
    </div>
  )
}

export default AllRoutes
