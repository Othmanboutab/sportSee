import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { CustomTooltip, CustomizedAxisTick } from "../utils/chart";
import "../styles/components/chart.scss";

const ActivityChart = ({ data }: UserActivity) => {
  if (!data) return null;

  const { sessions } = data;

  return (
    <div>
      {data && (
        <div className="dailyChart-container">
          <div className="title-container">
            <span className="chart-title">Activité quotidienne</span>
            <div className="userDataChart">
              <div className="weight-block">
                <i
                  style={{ marginRight: "10px" }}
                  className="fa-solid fa-circle"
                ></i>
                <span className="weight-data">Poids (kg)</span>
              </div>
              <div className="cal-block">
                <i
                  style={{ color: "red", marginRight: "10px" }}
                  className="fa-solid fa-circle"
                ></i>
                <span className="cal-data">Calories brûlées (kCal)</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer
            width="100%"
            height="100%"
            className="daily-chart"
            maxHeight={300}
            aspect={1.2}
          >
            <BarChart width={50} height={50} data={sessions}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="day"
                type="category"
                tickLine={false}
                axisLine={false}
                tick={CustomizedAxisTick}
              />
              <XAxis
                dataKey="calories"
                type="number"
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                dataKey="kilogram"
                type="number"
                tickLine={false}
                orientation="right"
                axisLine={false}
                domain={["dataMin - 1", "dataMax + 1"]}
              />
              <YAxis
                dataKey="calories"
                type="number"
                yAxisId="calorie"
                hide={true}
                domain={["dataMin - 100", "dataMax + 100"]}
              />
              <Tooltip content={<CustomTooltip />} offset={30} />
              <Bar
                name="Poids (kg)"
                dataKey="kilogram"
                radius={[10, 10, 0, 0]}
                barSize={7}
                fill="#282D30"
              />
              <Bar
                name="Calories brûlées (kCal)"
                dataKey="calories"
                radius={[10, 10, 0, 0]}
                barSize={7}
                yAxisId="calorie"
                fill="#E60000"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default ActivityChart;
