import { NavLink } from "react-router-dom"
import "../assets/style/nav.css"
import aaa from "../assets/image/AAA.jpg"

const NavBar = () => {
  return (
    <div className="nav-bar">
    <img src={aaa} alt="" className="aaa" />
        <div className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>about</NavLink>
            {/* <NavLink to='experience'>experience</NavLink> */}
            <NavLink to='contact'>contact</NavLink>
            <NavLink to='resume'>resume</NavLink>
            <NavLink to='github'>github user</NavLink>
        </div>
    </div>
  )
}

export default NavBar