import "./pages.css"
import Navbar from "../components/Navbar"

export default function Write({ user }) {
    return (
        <>
            <Navbar user={user} />
            <div className='write'>
                <form className="write-form">
                    <img src="https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="write form image" />
                    <div className="write-form__title">
                        <label htmlFor="input-file">
                            <i className="input-file__icon fa-solid fa-plus"></i>
                        </label>
                        <input type="file" id="input-file" style={{ display: "none" }} />
                        <input type="text" placeholder="write your title" />
                    </div>
                    <div className="write-form__desc">
                        <textarea placeholder="write your description..." autoFocus={true}></textarea>
                    </div>
                    <button>Publish</button>
                </form>
            </div>
        </>
    )
}
