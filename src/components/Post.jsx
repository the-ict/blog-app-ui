import "./components.css"

export default function Post() {
    return (
        <div className='post'>
            <img src="https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className='post-info'>
                <div className='post-info__title'>
                    <ul className='info-title__categories'>
                        <li>Music</li>
                        <li>Life</li>
                    </ul>
                    <p className='info-title__title'>Lorem ipsum dolor sit amet consectetur </p>
                    <p className='info-title__date'>1 hours ago</p>
                </div>
                <p className='post-info__desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio soluta nesciunt reiciendis itaque optio officiis. Labore recusandae porro doloribus nostrum, dolores, eligendi error nulla rerum itaque quos voluptatem odit quas.</p>
            </div>
        </div>
    )
}
