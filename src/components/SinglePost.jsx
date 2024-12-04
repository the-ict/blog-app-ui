import { useLocation } from "react-router-dom"
import "./components.css"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { Context } from "../context/Context"

export default function SinglePost() {
    const [post, setPost] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    const { user } = useContext(Context)
    const location = useLocation()
    const path = location.pathname.split("/")[2]

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/post/${path}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [])

    const photoUrl = `http://localhost:5000/images/${post.photo}`


    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/post/${post._id}`, {
                data: { username: user.username }
            })
            window.location.replace("/")
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/post/${post._id}`, {
                username: user.username,
                title,
                desc,
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='single-post'>
            <div className="single-post__wrapper">
                {
                    post.photo && (
                        <img src={photoUrl} alt="single post image" />
                    )
                }
                {
                    updateMode ? (
                        <input autoFocus className="post-update__input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    ) : (
                        <h1 className="single-post__title">
                            {post.title}
                            <div className="post-title__icons">
                                {
                                    user?.username === post.username && (
                                        <>
                                            <i className="title-icons fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                            <i className="title-icons fa-solid fa-delete-left" onClick={handleDelete}></i>
                                        </>
                                    )
                                }
                            </div>
                        </h1>
                    )
                }
                <div className="single-post__info">
                    <p className="post-info__author">Author: <span>{post.username}</span></p>
                    <p className="post-info__date">{new Date(post.createdAt).toDateString()}</p>
                </div>
                {updateMode ? <textarea className="post-update__area" value={desc} onChange={(e) => setDesc(e.target.value)} /> : <p className="single-post__desc">{post.desc}</p>}
                {updateMode && <button className="post-update__button" onClick={handleUpdate}>Update</button>}
            </div>
        </div>
    )
}
