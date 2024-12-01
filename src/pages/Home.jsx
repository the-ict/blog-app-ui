import "./pages.css"
import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function Home({ user }) {
    return (
        <div>
            <Navbar user={user}/>
            <Header />
            <div className="content">
                <Posts />
                <Sidebar />
            </div>
        </div>
    )
}
