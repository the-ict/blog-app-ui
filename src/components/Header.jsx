import "./components.css"

export default function Header() {
    return (
        <header className='header'>
            <div className='header-titles'>
                <h3 className='header-titles__sm'>React & Node</h3>
                <h1 className='header-titles__lg'>Blog</h1>
            </div>
            <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </header>
    )
}
