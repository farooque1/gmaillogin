import './App.css';
import React from 'react';
import {authentication} from './firebase';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  
  const signin=()=>{

    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication,provider)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  return (     
    <>
        <button onClick={signin}> Login with gmail</button>  
    </>
    )
}
export default App;
