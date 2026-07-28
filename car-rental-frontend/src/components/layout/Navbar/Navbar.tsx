import "./Navbar.css";
import { useState } from "react";

import Container from "../../common/Container";
import Button from "../../common/Button";

const Navbar = () => {

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

              <li><a href="#">Home</a></li>

              <li><a href="#">Fleet</a></li>

              <li><a href="#">Locations</a></li>

              <li><a href="#">Deals</a></li>

              <li><a href="#">Contact</a></li>

            </ul>
          </nav>

          {/* Buttons */}
          <div className="nav-buttons">

            <Button onClick={() => window.location.href = "/login"} variant="secondary">
              Login
            </Button>

            <Button>
              Book Now
            </Button>

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