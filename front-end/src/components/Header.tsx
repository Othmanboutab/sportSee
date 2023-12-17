import logo from "../assets/logo-navbar.svg";
import "../styles/components/header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={logo} />
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
