import React, { useContext, useRef } from 'react'
import { Link } from "react-router-dom"
import "./pages.css"
import { Context } from '../context/Context'
import axios from 'axios'

export default function Login() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = (event) => {
    console.log("hello world")
    event.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const login = async () => {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      }
      login()
    } catch (error) {
      console.log(error)
      dispatch({ type: "LOGIN_FAILURE" })
    }
  }
  return (
    <div className='login'>
      <button className='link-button'>
        <Link className='link' to={"/register"}>Register</Link>
      </button>
      <form className="login-form" onSubmit={handleSubmit}>
        <p className='login-form__title'>Login</p>
        <label>Username</label>
        <input ref={usernameRef} type="text" placeholder='Enter your username' />
        <label>Password</label>
        <input ref={passwordRef} type="password" placeholder='Enter your password' />
        <button disabled={isFetching}>Submit</button>
      </form>
    </div>
  )
}
