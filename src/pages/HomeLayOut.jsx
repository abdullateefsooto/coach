import { Outlet } from "react-router-dom"
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"

const HomeLayOut = () => {
  return (
    <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeLayOut