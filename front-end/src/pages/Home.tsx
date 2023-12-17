import { useEffect, useState } from "react";
import { getUserDetails } from "../request/user";
import Card from "../components/Card";
import "../styles/pages/home.scss";

const Home = () => {
  const [users, setUsers] = useState<User[]>();

  const ids = ["12", "18"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await Promise.all(
          ids.map((id) => getUserDetails(id))
        );
        setUsers(
          usersData.map((data, index) => ({
            id: ids[index],
            userInfos: data?.data?.userInfos,
            todayScore: data?.data?.todayScore,
            keyData: data?.data?.keyData,
          }))
        );
      } catch (error) {
        console.error("Error fetching users details:", error);
      }
    };

    fetchData();
  }, [ids]);

  return (
    <div className="users-container">
      <p className="title">
        Bienvenue sur <span>SportSee</span>
      </p>
      <div className="users">
        {users &&
          users.map((user) => (
            <Card id={user.id} key={user.id} userInfos={user?.userInfos} />
          ))}
      </div>
    </div>
  );
};

export default Home;
