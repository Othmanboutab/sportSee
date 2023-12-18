import { useEffect, useState } from "react";
import {
  getUserActivity,
  getUserDetails,
  getUserPerformance,
  getUserSessions,
} from "../request/user";
import { useParams } from "react-router-dom";
import "../styles/pages/details.scss";
import ActivityChart from "../components/ActivityChart";
import SessionChart from "../components/SessionChart";
import Intensity from "../components/Intensity";
import Score from "../components/Score";
import NutritionSidebar from "../components/NutritionSidebar";

interface UserData {
  userInfos: User;
  userActivity: UserActivity;
  userSessions: UserAverageSessions;
  userPerformance: UserPerformance;
}

const Details = () => {
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  if (!id) return <p>Aucun ID trouvé.</p>;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userInfos, userActivity, userSessions, userPerformance] =
          await Promise.all([
            getUserDetails(id),
            getUserActivity(id),
            getUserSessions(id),
            getUserPerformance(id),
          ]);
        setUserData({ userInfos, userActivity, userSessions, userPerformance });
      } catch (error) {
        setError(
          "Une erreur s'est produite lors de la récupération des données."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!userData) return null;

  return (
    <div className="details-container">
      <div className="title-container">
        <p className="title">
          Bonjour <span>{userData?.userInfos?.data?.userInfos?.firstName}</span>
        </p>
        <p className="subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className="charts-container">
        <div className="container">
          <div className="first-section">
            <ActivityChart data={userData.userActivity.data} />
          </div>
          <div className="second-section">
            <div>
              <SessionChart data={userData?.userSessions?.data} />
            </div>
            <div>
              <Intensity data={userData?.userPerformance?.data} />
            </div>
            <div>
              <Score data={userData?.userInfos?.data?.todayScore} />
            </div>
          </div>
        </div>
        <div className="aside">
          <NutritionSidebar data={userData?.userInfos?.data} />
        </div>
      </div>
    </div>
  );
};

export default Details;
