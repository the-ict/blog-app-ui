import "./components.css"
import Post from "./Post.jsx"

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      {
        posts.map(post => (
          <Post post={post} />
        ))
      }
    </div>
  )
}
