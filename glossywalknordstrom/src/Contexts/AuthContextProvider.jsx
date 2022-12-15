import React from 'react'
import { createContext , useState} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [state , setState] = useState({
    isAuth:false,
    token:null
  });
 
  const signinUser = (token) =>{
    setState({
      ...state,
      isAuth:true,
      token
    })

  }
  const signoutUser = () =>{
    setState({
      ...state,
      isAuth:false,
      token:null
    })

  }
  return (
   <AuthContext.Provider value={{state ,signinUser ,signoutUser}}>
    {children}
   </AuthContext.Provider>
  )
}

export {AuthContextProvider}

