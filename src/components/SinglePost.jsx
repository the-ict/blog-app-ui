import "./components.css"

export default function SinglePost() {
    return (
        <div className='single-post'>
            <div className="single-post__wrapper">
                <img src="https://images.pexels.com/photos/1251026/pexels-photo-1251026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="single post image" />
                <h1 className="single-post__title">
                    Lorem ipsum dolor sit amet quis!
                    <div className="post-title__icons">
                        <i className="title-icons fa-regular fa-pen-to-square"></i>
                        <i className="title-icons fa-solid fa-delete-left"></i>
                    </div>
                </h1>
                <div className="single-post__info">
                    <p className="post-info__author">Author: <span>Safak</span></p>
                    <p className="post-info__date">1 hour ago</p>
                </div>
                <p className="single-post__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet veniam consequatur quam culpa aspernatur repudiandae dolores, tempore, eaque, quos ullam neque eum animi? Quas recusandae dignissimos cupiditate voluptatum omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet veniam consequatur quam culpa aspernatur repudiandae dolores, tempore, eaque, quos ullam neque eum animi? Quas recusandae dignissimos cupiditate voluptatum omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet veniam consequatur quam culpa aspernatur repudiandae dolores, tempore, eaque, quos ullam neque eum animi? Quas recusandae dignissimos cupiditate voluptatum omnis!</p>
            </div>
        </div>
    )
}
