import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {/* logo */}
          <Link to="/" className="logo">
            <i class="fa-solid fa-house"></i>
            <span>AdeboProperty</span>
          </Link>

          <div className="menu-items">
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <Link to="/post-property" className="btn">
            Post property
          </Link>
          <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
