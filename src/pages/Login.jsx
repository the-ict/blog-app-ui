import React from 'react'
import "./pages.css"

export default function Login() {
  return (
    <div className='login'>
      <button className='link-button'>Login</button>
      <form className="login-form">
        <p className='login-form__title'>Login</p>
        <label>Username</label>
        <input type="text" placeholder='Enter your username' />
        <label>Password</label>
        <input type="password" placeholder='Enter your password' />
        <button>Submit</button>
      </form>
    </div>
  )
}
