import "./pages.css"
import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home({ user }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await axios.get("http://localhost:5000/api/post")
            setPosts(posts.data)
        }
        fetchPosts();
    }, [])
    return (
        <div>
            <Navbar user={user} />
            <Header />
            <div className="content">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </div>
    )
}
