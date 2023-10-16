import React, { useState } from 'react';
import './reset.scss'
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { database } from './Authentication';
import {Login} from '../login/Login';


const Reset = () => {

  const history=useNavigate()

  const[reset,SetReset]=useState('')
  console.log(reset)

  const clickHandler=()=>{
    history('/')
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const EmailVal=e.target.email.value;
    // console.log(EmailVal)

    sendPasswordResetEmail(database,EmailVal).then((data)=>{
      history('/')
      alert('Email sent')
    }).catch((err)=>{
      alert(err.code)
    })
  }

  return (
    <React.Fragment>
        <div className='login'>
      <div className="top">
        <div className="wrapper">
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=''/>
            <button onClick={clickHandler}>SignIn</button>
      </div>
      </div>
      <div className="container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <h1>Forgot Email/Password</h1>
          <p>How would you like to reset your password?</p>
          <div className="fields">
            <label>
              <input type='radio' name='reset' value='email' onChange={(e)=>SetReset(e.target.value)}/>Email
            </label>
            <label>
              <input type='radio' name='reset' value='PhoneNumber' onChange={(e)=>SetReset(e.target.value)}/>Phone Number
            </label>
          </div>
          {
            reset==='email'? <h3>We will send you an email with instructions on how to reset your password.</h3>:
            <h3>We will text you a verification code to reset your password. Message and data rates may apply.</h3>
          }
          {/* {
            reset==='email'?<input type='email' name='email' placeholder='name@example.com'/>:
            <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
          } */}
          <input type='email' name='email' placeholder='name@example.com'/>
          <button >Email Me</button>
        </form>
        </div>
    </div>
    </React.Fragment>
  );
}

export default Reset;
