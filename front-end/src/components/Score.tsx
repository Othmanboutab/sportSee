import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
} from "recharts";
import "../styles/components/chart.scss";
import { CustomScoreData } from "../utils/chart";

const Score = ({ data }: { data: number }) => {
  const userScore = [
    {
      todayScore: data * 100,
    },
  ];

  return (
    <div className="userScoreChart">
      <span className="userTitle">Score</span>
      <ResponsiveContainer width="100%" height="100%" aspect={1.2}>
        <RadialBarChart
          startAngle={140}
          endAngle={500}
          cx="50%"
          cy="50%"
          innerRadius={70}
          barSize={10}
          outerRadius={120}
          data={userScore}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey={"todayScore"}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar cornerRadius="50%" dataKey="todayScore" fill="#E60000" />
          <Legend content={<CustomScoreData />} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;
