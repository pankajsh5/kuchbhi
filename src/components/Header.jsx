import {Link} from "react-router-dom"
import "./header.css"
const Header = () => {
  return (
 <>
 <nav className="header">
    <div className="logo"><h3>Something</h3></div>
    <div className="buttons">
        <Link to={"/register"} className="btn">Sign up</Link>
        <Link to={"/signin"} className="btn">Sign in</Link>
    </div>
 </nav>
 </>
  )
}

export default Header