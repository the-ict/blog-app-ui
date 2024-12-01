import React from 'react'
import SinglePost from "../components/SinglePost"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import "./pages.css"

export default function Single({ user }) {
    return (
        <>
            <Navbar user={user} />
            <div className='single-post'>
                <SinglePost />
                <Sidebar />
            </div>
        </>
    )
}
