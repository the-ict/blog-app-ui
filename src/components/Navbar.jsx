import React, { useContext } from 'react'
import "./components.css"
import { Link } from "react-router-dom"
import { Context } from '../context/Context'

export default function Topbar({ user }) {
    const { dispatch } = useContext(Context)

    const handleLogOut = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className='navbar'>
            <div className="navbar-left">
                <i className="navbar-left__icon fa-brands fa-square-facebook"></i>
                <i className="navbar-left__icon fa-brands fa-square-instagram"></i>
                <i className="navbar-left__icon fa-brands fa-square-x-twitter"></i>
                <i className="navbar-left__icon fa-brands fa-square-pinterest"></i>
            </div>
            <div className="navbar-center">
                <ul className='navbar-center__navigation'>
                    <li className='center-navigation__item'>
                        <Link className='link' to={"/"}>HOME</Link>
                    </li>
                    <li className='center-navigation__item'>
                        <Link className='link' to={"/"}>ABOUT</Link>

                    </li>
                    <li className='center-navigation__item'>
                        <Link className='link' to={"/"}>CONTACT</Link>
                    </li>
                    <li className='center-navigation__item'>
                        <Link className='link' to={"/write"}>WRITE</Link>
                    </li>
                    <li className='center-navigation__item'>
                        <Link className='link' to={"/"} onClick={handleLogOut} >{user && "LOGOUT"}</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                {user ?
                    <>
                        <Link className='link' to={"/settings"}>
                            <img src={user.profile_picture} alt="" className="navbar-right__img" />
                        </Link>
                        <i className="navbar-right__search fa-solid fa-magnifying-glass"></i>
                    </> :
                    <>
                        <ul className='navbar-right__links'>
                            <li><Link className='link' to={"/register"}>REGISTER</Link></li>
                            <li><Link className='link' to={"/login"}>REGISTER</Link></li>
                        </ul>
                    </>}
            </div>
        </div>
    )
}
