import { Link } from "react-router-dom"
import "./components.css"

export default function Post({ post }) {
    const postPhoto = "http://localhost:5000/images/"
    console.log(postPhoto + post.photo)
    return (
        <div className='post' >
            {post.photo && (
                <img src={postPhoto + post.photo} alt="" />
            )}
            <div className='post-info'>
                <div className='post-info__title'>
                    <ul className='info-title__categories'>
                        {
                            post.categories.map(c => (
                                <>
                                    <li key={c}>{c}</li>
                                </>
                            ))
                        }
                    </ul>
                    <Link className="link" to={`/single/${post._id}`}>
                        <p className='info-title__title'>{post.title}</p>
                    </Link>
                    <p className='info-title__date'>{new Date(post.createdAt).toDateString()}</p>
                </div>
                <p className='post-info__desc'>{post.desc}</p>
            </div>
        </div>
    )
}
