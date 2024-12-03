import React, { useState } from 'react'
import "./pages.css"
import axios from "axios"

export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState([])
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(false)
        const auth = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/auth/register", {
                    username,
                    password,
                    email,
                })
                console.log(res.data)
                res.data && setUser(res.data)
                window.location.replace("/login")
            } catch (error) {
                setError(error)
            }
        }
        auth()
    }
    return (
        <div className='register'>
            <button className='link-button'>Login</button>
            <form className="register-form" onSubmit={handleSubmit}>
                <p className='register-form__title'>Register</p>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter your username' />
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' />
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' />
                <button>Submit</button>
                {
                    error && <p style={{ color: "red" }}>Something went wrong !</p>
                }
            </form>
        </div>
    )
}
