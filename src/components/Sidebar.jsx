import "./components.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-item">
                <p className='sidebar-item__title'>ABOUT ME</p>
                <img src="https://images.pexels.com/photos/7153904/pexels-photo-7153904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sidebar img" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui cupiditate nesciunt sed illo similique, fuga veritatis! Quos et ab rem consequatur aliquam recusandae maxime minus, earum deserunt ducimus reprehenderit vitae.</p>
            </div>
            <div className="sidebar-item">
                <p className='sidebar-item__title'>CATEGORIES</p>
                <ul className='sidebar-item__list'>
                    <li className='list-item__items'>Life</li>
                    <li className='list-item__items'>Sport</li>
                    <li className='list-item__items'>Style</li>
                    <li className='list-item__items'>Tech</li>
                    <li className='list-item__items'>Cinema</li>
                    <li className='list-item__items'>Nature</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <p className='sidebar-item__title'>FOLLOW US</p>
                <div className="sidebar-item__social">
                    <i className="sidebar-icon fa-brands fa-square-facebook"></i>
                    <i className="sidebar-icon fa-brands fa-square-instagram"></i>
                    <i className="sidebar-icon fa-brands fa-square-x-twitter"></i>
                    <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
