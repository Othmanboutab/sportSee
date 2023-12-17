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

interface UserData {
  userInfos: User;
  userActivity: UserActivity;
  userSessions: UserAverageSessions;
  userPerformance: UserPerformance;
}

const Details = () => {
  const [userData, setUserData] = useState<UserData>();

  const { id } = useParams<{ id: string }>();

  if (!id) return null;

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
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, [id]);

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
        <div className="first-section">
          <ActivityChart data={userData?.userActivity?.data?.sessions} />
        </div>
        <div className="second-section">
          <SessionChart data={userData?.userSessions?.data?.sessions} />
          <Intensity data={userData?.userPerformance?.data?.data} />
          <Score data={userData?.userInfos?.data?.todayScore} />
        </div>
      </div>
    </div>
  );
};

export default Details;
