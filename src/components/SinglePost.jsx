import { useLocation } from "react-router-dom"
import "./components.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function SinglePost() {
    const [post, setPost] = useState([])

    const location = useLocation()
    const path = location.pathname.split("/")[2]

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/post/${path}`)
            setPost(res.data)
        }
        getPost()
    }, [])

    const photoUrl = `http://localhost:5000/images/${post.photo}`

    return (
        <div className='single-post'>
            <div className="single-post__wrapper">
                {
                    post.photo && (
                        <img src={photoUrl} alt="single post image" />
                    )
                }
                <h1 className="single-post__title">
                    {post.title}
                    <div className="post-title__icons">
                        <i className="title-icons fa-regular fa-pen-to-square"></i>
                        <i className="title-icons fa-solid fa-delete-left"></i>
                    </div>
                </h1>
                <div className="single-post__info">
                    <p className="post-info__author">Author: <span>{post.username}</span></p>
                    <p className="post-info__date">{new Date(post.createdAt).toDateString()}</p>
                </div>
                <p className="single-post__desc">{post.desc}</p>
            </div>
        </div>
    )
}
