import apple from "../assets/apple.svg";
import chicken from "../assets/chicken.svg";
import fire from "../assets/fire.svg";
import burger from "../assets/burger.svg";
import "../styles/components/nutritionSidebar.scss";
import PropTypes from "prop-types";

interface Nutrition {
  logo: string;
  value: number;
  title: string;
  unit: string;
}

const NutritionSidebar = ({ data }: User) => {
  const {
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = data;
  const nutritionArray = [
    {
      logo: fire,
      value: calorieCount,
      title: "Calories",
      unit: "KCal",
    },
    {
      logo: chicken,
      value: proteinCount,
      title: "Protéines",
      unit: "g",
    },
    {
      logo: apple,
      value: carbohydrateCount,
      title: "Glucides",
      unit: "g",
    },
    {
      logo: burger,
      value: lipidCount,
      title: "Lipides",
      unit: "g",
    },
  ];

  return (
    <div className="nutrition-container">
      {nutritionArray?.map((n: Nutrition, index: number) => {
        return (
          <div className="nutrition-card" key={index}>
            <span className={`logo-container ${(n?.title).toLowerCase()}`}>
              <img src={n?.logo} />
            </span>
            <div className="title-container">
              <span className="value">
                {Number(n?.value).toLocaleString()}
                {n.unit}
              </span>
              <span className="title">{n?.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

NutritionSidebar.propTypes = {
  data: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NutritionSidebar;
