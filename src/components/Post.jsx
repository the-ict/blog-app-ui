import { Link } from "react-router-dom"
import "./components.css"

export default function Post({ post }) {
    console.log(post)
    return (
        <div className='post' >
            {post.photo && (
                <img src="https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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
