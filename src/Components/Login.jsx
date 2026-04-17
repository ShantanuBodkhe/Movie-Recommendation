import React, { useState } from 'react'
import Header from './Header'
import Background_logo from '../Utils/background_logo.png'

const Login = () => {
  const [isSignInForm,setSignInForm]=useState(true);
const toggleSignInForm=()=>{
  setSignInForm(!isSignInForm)
};

  return (
   <div>
      <Header />
      <div className="absolute">
        <img
          src={Background_logo}
          alt="Background logo"
        />
      </div>
      <form
        
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm?"Sign In":"Sign Up"}
        </h1> 
        { !isSignInForm &&
        <input
          
          type="text"
          placeholder="Enter Your Name"
          className="p-4 my-4 w-full bg-gray-800"
        />
}
        <input
          
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 "
        />
        <p className="text-red-600 font-bold text-lg py-2"></p>

        <button
          className="p-4 my-6  bg-red-700 w-full rounded-lg" 
        >
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm?" New to Netflix ? Sign Up Now":"Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login