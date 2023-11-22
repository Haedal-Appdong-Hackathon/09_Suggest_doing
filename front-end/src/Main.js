import React, { useState } from 'react'
import './App.css'

const Main = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //서버로 로그인 정보 전송
    console.log('로그인 정보:', { email, password });
  };
    return (

        <div className="login_page">
          <h1>가제</h1><br />
          <fieldset className="login_box">
            <legend>Login</legend>
        <form className='login_form' onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button>Login</button>
        </form>
        </fieldset>
      </div>
      );
};

export default Main