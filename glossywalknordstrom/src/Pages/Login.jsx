import React from 'react'
import {NavLink , Outlet} from "react-router-dom";
import "../Components/login.css"

const Login = () => {
  const activeStyle = {
    backgroundColor : "black",
    borderRadius:"5px",
    border:"none",
    color:"white",
    textDecoration:"none",
    padding : "5px 10px"

}
const defaultStyle = {
    backgroundColor : "white",
    borderRadius:"5px",
    border:"none",
    color:"black",
    textDecoration:"none"
}
  return (
    <div className='auth'>
      <div>
        <NavLink style={({isActive})=> isActive ? activeStyle : defaultStyle } to="signin">Sign In</NavLink>
        <NavLink style={({isActive})=> isActive ? activeStyle : defaultStyle } to="signup">Sign Up</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Login
