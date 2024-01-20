import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
import Navbar from '../components/Navbar'
const Login = ({setIsLoggedIn,isLoggedIn}) => {
  return (

  <div>
  <Navbar setIsLoggedIn={setIsLoggedIn}  isLoggedIn={isLoggedIn}  />
  <Template 
    title="Welcome Back"
    desc1="Build skills for today , tommorow and beyond."    
    desc2= "Education to future-proof your carrer."
    image={loginImg}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
     
  />
  </div>

  )
}

export default Login
