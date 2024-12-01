import React from 'react'
import "./pages.css"

export default function Register() {
    return (
        <div className='register'>
            <button className='link-button'>Login</button>
            <form className="register-form">
                <p className='register-form__title'>Register</p>
                <label>Username</label>
                <input type="text" placeholder='Enter your username' />
                <label>Email</label>
                <input type="email" placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
                <button>Submit</button>
            </form>
        </div>
    )
}
