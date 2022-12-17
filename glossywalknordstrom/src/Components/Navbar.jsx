import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";
import { AuthContext } from '../Contexts/AuthContextProvider';
import {useContext , useState , useEffect} from "react";
import axios from "axios";



const Navbar = () => {

  const {state , signoutUser} = useContext(AuthContext);

  const [query , setQuery] = useState("");
  const [data ,setData] = useState([]);
 
  const  getData = (query) =>{
    return axios.get(`https://dummyjson.com/products/search?q=${query}&limit=5`)
    .then((res)=>setData(res.data))
   }
   console.log(data)
  return (
    <div className='navbar'>
      <div>NORDSTROM</div>
      <div>
        <input
        type="text" 
        value={query}
        onChange = {(e)=>setQuery(e.target.value)}
        onMouseEnter={()=>getData(query)}
        placeholder='search for products'/>
      </div>
      <div>
        {(state.isAuth) ?
            <div>
            <p>welcome : {state.token}</p>
            <button onClick={signoutUser}>Sign Out</button>
            </div>
        
          :<Link to="/login">signin</Link>
        }
        
        <Link  to="/cart">cart</Link>
      </div>
    </div>
  )
}

export default Navbar
