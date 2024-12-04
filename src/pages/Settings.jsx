import React, { useContext, useState } from 'react'
import "./pages.css"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import axios from 'axios'
import { Context } from '../context/Context'

export default function Settings() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState(false)


  const { user, dispatch } = useContext(Context)

  const photoUrl = `http://localhost:5000/images/${user.profile_picture}`


  const handleUpdate = async () => {
    const updateUser = {
      username,
      email,
      password,
      user_id: user._id,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      updateUser.profile_picture = filename
      dispatch({ type: "UPDATE_START" })
      try {
        const res = await axios.post("http://localhost:5000/api/upload", data)
        console.log(res.data)
      } catch (error) {
        console.log("fileni yuklab bo'lmadi")
      }
    }
    try {
      const updatedUser = await axios.put("http://localhost:5000/api/user/" + user._id, updateUser)
      window.location.reload()
      console.log(updatedUser.data)
      dispatch({ type: "UPDATE_SUCCESS", payload: updatedUser.data })
    } catch (error) {
      console.log(error)
      dispatch({ type: "UPDATE_FAILURE" })
    }
  }


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
              <img src={file ? URL.createObjectURL(file) : photoUrl} alt="profile picture" />
              <label htmlFor="file-input">
                <i className="fa-solid fa-user"></i>
              </label>
              <input onChange={(e) => setFile(e.target.files[0])} type="file" id='file-input' style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
            <label>email</label>
            <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button className='wrapper-form__button' onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  )
}
