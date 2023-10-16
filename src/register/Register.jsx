import React, { useRef, useState } from 'react';
import './register.scss'
import { Link, BrowserRouter as Router } from 'react-router-dom'; // Correct import
import { useNavigate } from 'react-router-dom';
// import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

const Register = () => {
    const[email,setEmail]=useState("")
    const emailRef=useRef()
    
  // const navigate=useNavigate()

    // const handleClick=(e)=>{
    //   // navigate('/login');
    //   navigate('/')
    //   // navigate('/login')
    // }

    const[password,setPassword]=useState("")
    const passwordRef=useRef()

    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish=()=>{
        setPassword(passwordRef.current.value)
    }
    
  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=''/>
           <div className="wrapper2">
                <select>
                    <option value='English'>English</option>
                    <option value='Hindi'>Hindi</option>
                    <option value='Telugu'>Telugu</option>
                    <option value='Kanada'>Kanada</option>
                    <option value='Malayalam'>Malayalam</option>
                  </select>
                  <Link to="/login">
              <button className="loginButton">Sign In</button>
            </Link>
            </div>
          </div>
      </div>
    

      <div className="container">
      <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {
            !email ? <div className="input">
            <input type='email' placeholder='email address' ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>Get Started</button>
        </div>:(
        <form className="input">
            <input type='password' name='password' placeholder='Password' ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>Start</button>
        </form>)
        }
      </div>
    </div>
  );
}

export default Register;
