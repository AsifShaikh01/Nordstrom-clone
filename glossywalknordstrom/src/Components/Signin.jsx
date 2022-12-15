import React from 'react'
import {useState} from "react";
import {useContext} from "react";
import { AuthContext } from '../Contexts/AuthContextProvider';
import "./signin.css";
import {Navigate} from "react-router-dom";

const Signin = () => {
    const {state , signinUser} = useContext(AuthContext);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    // console.log(email,password)
    const handleSubmit = async (e) =>{
        e.preventDefault();
         try {
            let res = await fetch(`https://reqres.in/api/register`,{
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    email,password
                })
            })
           res = await res.json();
           signinUser(
            res.token
           )
            
         } catch (error) {
            console.log(error);
         }
    }

    if(state.isAuth){
        return <Navigate to="/"/>
    }
  return (
    <div className='singindiv'>
      <form className='form' action="" onSubmit={handleSubmit}>
        <input 
        type="email" 
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}     />
        <input 
        type="password" 
        placeholder='Password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}        
        />
        <input type="submit"  value="SIGN IN"/>
      </form>
    </div>
  )
}

export default Signin
