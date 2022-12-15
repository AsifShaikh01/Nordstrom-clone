import React from 'react'


const Signup = () => {
   
   
  return (
    
    <div className='singindiv'>
      <form className='form' action="">
        <input type="text"
        placeholder='Name' />
        <input
         type="email" 
         placeholder='Email'
        />
        <input 
        type="password" 
        placeholder='Password' 

        />
        <input type="submit"  value="SIGN UP"/>
      </form>
    </div>
      
    
  )
}

export default Signup
