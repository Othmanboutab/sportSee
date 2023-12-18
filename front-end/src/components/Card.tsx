import { Link } from "react-router-dom";
import "../styles/components/card.scss";
import PropTypes from "prop-types";

const Card = ({ user }: { user: User }) => {
  if (!user) return null;

  const {
    data: {
      id,
      userInfos: { firstName, lastName, age },
    },
  } = user;

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

Card.propTypes = {
  user: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.string,
      userInfos: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    }),
  }),
};

export default Card;
