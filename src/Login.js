/** @format */

import React, { useState } from 'react';
import AppInput from './AppInput';
 
import './login.css';

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [data, setData] = useState('no data');

   

  // data.map((v)=>console.log(v.username))
  const buttonClickHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  }

  const usernameC = (username) => setUsername(username.target.value)
 
  return (
    <div className='login-page'>
      <div className='form'>
        <img src={require('./lol.png')} />

        <form className='login-form'>
          <AppInput
            type='text'
            placeholder='username'
            onChange={usernameC}
          />
          <AppInput
            type='password'
            placeholder='password'
            onChange={(password) => setPassword(password.target.value)}
          />
          <button onClick={buttonClickHandler}>create</button>
          <p className='message'>
            Not registered? <a href='/'>Create an account</a>
          </p>
        </form>

        <ul> 
        </ul>
      </div>
    </div>
  );
}
