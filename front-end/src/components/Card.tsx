import { Link } from "react-router-dom";
import "../styles/components/card.scss";

const Card: React.FC<Partial<User>> = ({ id, userInfos }) => {
  if (!userInfos) return null;
  const { firstName, lastName, age } = userInfos;

  return (
    <Link to={`/user/${id}`} className="link">
      <div className="card">
        <i className="fa-regular fa-user"></i>
        <span className="name">
          {firstName} {lastName}
        </span>
        <span className="age">{age} ans</span>
      </div>
    </Link>
  );
};

export default Card;
