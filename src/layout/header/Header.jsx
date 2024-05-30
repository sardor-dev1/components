import "./header.scss"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="header container">
        <h1>Logo</h1>
        <nav className="nav">
          <NavLink exact to="/" ClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/blog" ClassName="active-link">
            BLog
          </NavLink>
          <NavLink to="/contact" ClassName="active-link">
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header