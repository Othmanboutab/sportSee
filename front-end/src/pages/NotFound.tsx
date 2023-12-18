import { Link } from "react-router-dom";
import "../styles/pages/notFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-main">
      <div className="detail">
        <h2>404</h2>

        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>

      <Link to="/" className="back">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default NotFound;
