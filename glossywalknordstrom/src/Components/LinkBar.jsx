import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {path:"/" , text:"Home"},
    {path:"/men" , text:"Men"},
    {path:"/women" , text:"Women"},
    
    {path:"/beauty" , text:"Beauty"},
]
const LinkBar = () => {
    const styles = {
        width:"60%",
        margin:"auto",
        height:"60px",
        display : "flex",
        justifyContent:"space-around",
        alignItems:"center",

        

    }
    const defaultStyle = {
        color:"black",
        textDecoration:"none"
    }
    const activeStyle = {
        color:"tomato",
        textDecoration:"underline"
    }
  return (
    <div  style={styles} >
        {
            links.map((link)=>(
                <NavLink
                 key={link.path}
                 style={({isActive})=> isActive?
                activeStyle : defaultStyle}
                 to={link.path}>
                    {link.text}
                    </NavLink>
            ))
        }
      
    </div>
  )
}

export default LinkBar
