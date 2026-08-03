import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../common/Container";
import Button from "../../common/Button";

import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">

      <Container>

        <div className="navbar-content">

          {/* Logo */}
          <div className="logo">
            <h2>Velocis</h2>
          </div>

          {/* Navigation */}
          <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
            <ul>

              <li><a onClick={() => navigate("/")}>Home</a></li>

              <li><a onClick={() => navigate("/fleet")}>Fleet</a></li>

              <li><a href="#">Locations</a></li>

              <li><a href="#">Deals</a></li>

              <li><a href="#">Contact</a></li>

            </ul>
          </nav>

          {/* Buttons */}
          <div className="nav-buttons">
            {user ? (
              <>
                <span className="user-name">
                  Hi, {user.name}
                </span>
          
                <Button
                  variant="secondary"
                  onClick={() => {
                      logout();
                      navigate("/");
                  }}
              >
                  Logout
              </Button>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
          
                <Button>
        Book Now
                </Button>
              </>
            )}

</div>

          {/* Mobile Menu */}
          <div
            className="menu-toggle"
            onClick={toggleMenu}
          >
            ☰
          </div>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;