import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './login/Login';
import Register from './register/Register';
import Home from './home/Home';
import Reset from './login/Reset';
import Watch from './Pages/Watch/Watch';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/reset' element={<Reset/>}></Route>
        <Route path='/watch' element={<Watch/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
