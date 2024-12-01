import React from 'react'
import "./pages.css"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function Settings({ user }) {
  return (
    <>
      <Navbar user={user} />
      <div className='settings'>
        <div className="settings-wrapper">
          <div className="settings-wrapper__titles">
            <p className='wrapper-titles__update'>Update your profile</p>
            <p className='wrapper-titles__delete'>Delete your profile</p>
          </div>
          <div className='settings-wrapper__form'>
            <p className='wrapper-form__title'>Profile Picture</p>
            <div className='wrapper-form__pp'>
              <img src="https://images.pexels.com/photos/17504248/pexels-photo-17504248/free-photo-of-book-and-camera-on-picnic-blanket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile picture" />
              <label htmlFor="file-input">
                <i className="fa-solid fa-user"></i>
              </label>
              <input type="file" id='file-input' style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='@x' />
            <label>email</label>
            <input type="email" placeholder='x@email.com' />
            <label>Password</label>
            <input type="password" />
            <button className='wrapper-form__button'>
              Update
            </button>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  )
}
