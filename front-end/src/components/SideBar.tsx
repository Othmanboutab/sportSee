import "../styles/components/sideBar.scss";
import yoga from "../assets/yoga.svg";
import bike from "../assets/velo.svg";
import swim from "../assets/piscine.svg";
import dumbbell from "../assets/altere.svg";

const SideBar = () => {
  return (
    <aside>
      <div className="logos">
        <span>
          <img src={yoga} alt="yoga logo" />
        </span>
        <span>
          <img src={swim} alt="swim logo" />
        </span>
        <span>
          <img src={bike} alt="bike logo" />
        </span>
        <span>
          <img src={dumbbell} alt="dumbbell logo" />
        </span>
      </div>

      <span className="copiryght">
        <p>Copiryght, SportSee 2023</p>
      </span>
    </aside>
  );
};

export default SideBar;
