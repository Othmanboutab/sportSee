import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomCursor, CustomTooltip } from "../utils/chart";
import PropTypes from "prop-types";

const COLOR = "#ffffffa4";

const SessionChart = ({ data }: UserAverageSessions) => {
  if (!data) return null;
  const { sessions } = data;

  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  const newData = sessions.map(
    (item: { day: number; sessionLength: number }) => ({
      day: daysOfWeek[item.day - 1],
      sessionLength: item.sessionLength,
    })
  );

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1.2}>
      <LineChart
        data={newData}
        style={{ background: "red", borderRadius: "10px" }}
        margin={{ top: 70, right: 20, bottom: 10, left: 20 }}
      >
        <text
          x="15%"
          y="15%"
          fontSize={14}
          fontWeight={500}
          width={100}
          fill={COLOR}
        >
          Durée moyenne des
          <tspan x="15%" y="27%">
            sessions
          </tspan>
        </text>
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ r: 4 }}
          unit={"min"}
          stroke={COLOR}
          strokeWidth={2}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ strokeWidth: 0, r: 10 }}
          stroke={"#ffffff40"}
        />
        <YAxis hide domain={["dataMin - 15", "dataMax + 10"]} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          stroke={COLOR}
          fontSize={13}
          fontWeight={100}
        />
        <Tooltip
          wrapperStyle={{
            background: "#FFF",
            color: "#000",
            height: "45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            outline: "none",
            width: "100px",
          }}
          labelStyle={{ display: "none", border: "none" }}
          content={<CustomTooltip />}
          cursor={<CustomCursor />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

SessionChart.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ),
  }),
};

export default SessionChart;
