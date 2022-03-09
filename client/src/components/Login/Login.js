import React from 'react'
import '../../assets/css/login.css';
import loginimg from '../../assets/media/login.png';

const Login = () => {
  return (
    <div className='login'>
        <div className='login-left'>
            <div className='login-head'>
                <h1>E-Adaalat Management</h1>
                <h1>System </h1>
                <p>“A State Of The Art e-Court Solution”</p>
            </div>
            <img src={loginimg} width="400px"></img>
        </div>
        <div className='login-right'>
            <div className='login-box'>
                <div className='login-content'>
                    <h1>Login</h1>
                    <div className='form'>
                        <input className='forminput' type="text" name="userid" placeholder='User ID'></input>
                        <input className='forminput' type="password" name="password" placeholder='Password'></input>
                    </div>
                    <button className='loginbtn'>
                        Login
                    </button>
                    <p>Don't have an account? <a className='signup-a'>Sign Up</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login