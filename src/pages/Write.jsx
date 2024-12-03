import "./pages.css"
import Navbar from "../components/Navbar"
import { useState } from "react"
import axios from "axios"

export default function Write({ user }) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newPost = {
            title,
            desc,
            username: user.username,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                const res = await axios.post("http://localhost:5000/api/upload", data)
                console.log(res.data)
            } catch (error) {
                console.log("fileni yuklab bo'lmadi")
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/api/post", newPost)
            console.log(res.data)
            window.location.replace("/single/" + res.data._id);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Navbar user={user} />
            <div className='write'>
                <form className="write-form" onSubmit={handleSubmit}>
                    {
                        file && (
                            <img src={URL.createObjectURL(file)} alt="write form image" />
                        )
                    }
                    <div className="write-form__title">
                        <label htmlFor="input-file">
                            <i className="input-file__icon fa-solid fa-plus"></i>
                        </label>
                        <input onChange={(file) => setFile(file.target.files[0])} type="file" id="input-file" style={{ display: "none" }} />
                        <input onChange={(title) => setTitle(title.target.value)} type="text" placeholder="write your title" />
                    </div>
                    <div className="write-form__desc">
                        <textarea onChange={(desc => setDesc(desc.target.value))} placeholder="write your description..." autoFocus={true}></textarea>
                    </div>
                    <button>Publish</button>
                </form>
            </div>
        </>
    )
}
