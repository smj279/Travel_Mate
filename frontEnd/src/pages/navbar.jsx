import { Link } from "react-router-dom";
import "../allCss/navbar.css"; // Make sure this file is linked correctly

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo and Home */}
      <div className="nav-left">
        <Link to="/">
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
        </Link>
        
      </div>

      {/* Center: Flight, Bus, Hotel, Tour */}
      <div className="nav-center">
        <Link to="/flight" className="nav-link">Flight</Link>
        <Link to="/bus" className="nav-link">Bus</Link>
        <Link to="/hotel" className="nav-link">Hotel</Link>
        <Link to="/tour" className="nav-link">Tour</Link>
      </div>

      {/* Right: Login */}
      <div className="nav-right">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signUp" className="login-btn">SignUp</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
