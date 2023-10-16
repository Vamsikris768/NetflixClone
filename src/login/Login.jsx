import React, { useRef, useState } from 'react';
import './login.scss'
import { database } from './Authentication';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword}  from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
 const [login,setLogin]=useState(false)

  const history=useNavigate()

  const handleClick=()=>{
    history('/register')
  }

  const clickReset=()=>{
    history('/reset')
  }

  const handleSubmit=(e,type)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
if(type==='signUp'){
      createUserWithEmailAndPassword(database,email,password).then((data)=>{
        console.log(data)
        history('/home')
    }).catch((err)=>{
      alert(err)
      setLogin(true)
    })}
else{
  signInWithEmailAndPassword(database,email,password).then((data)=>{
    console.log(data)
    history('/home')
}).catch((err)=>{
  // console.log(err)
  alert(err)
})

}
   

  }
  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=''/>
      </div>
      </div>
      <div className="container">
        <form onSubmit={e=>handleSubmit(e,login?'signIn':'signUp')}>
          <h1>{login?'signIn':'SignUp'}</h1>
          <input type='email' name='email' placeholder='Email or Phone number'/>
          <input type='password' name='password' placeholder='Password'/>
          <button className='loginButton'>{login?'signIn':'SignUp'}</button>
          <div className='extra'>
            <label>
            <input type='checkbox'></input>Remember Me
            </label>
            <p className='Fpassword' onClick={clickReset}>Need Help ?</p>
          </div>
          <span>
            New to Netflix? <b onClick={handleClick}>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
