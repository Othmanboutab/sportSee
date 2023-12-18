import { useState } from "react";
import logo from "../assets/logo-navbar.svg";
import "../styles/components/header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={`mobile-menu ${menuOpen ? "menu-open" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <img src={logo} alt="Logo" className="img-mobile" />
        <ul>
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <span>Profil</span>
          </li>
          <li>
            <span>Réglage</span>
          </li>
          <li>
            <span>Communauté</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
