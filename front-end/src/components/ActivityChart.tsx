import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from "recharts";
import { CustomizedAxisTick, CustomTooltip } from "../utils/chart";

const ActivityChart = ({ data }: any) => {
  if (!data) return null;

  return (
    <div>
      {data && (
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="2 2" vertical={false} />
            <XAxis dataKey="day" tickLine={false} tick={CustomizedAxisTick} />
            <YAxis
              orientation="right"
              axisLine={false}
              allowDecimals={false}
              yAxisId={1}
              domain={["dataMin - 10", "dataMax + 10"]}
            />
            <YAxis hide dataKey={"calories"} yAxisId={2} />
            <Tooltip
              content={CustomTooltip}
              offset={40}
              wrapperStyle={{
                color: "#FFF",
                background: "red",
                border: "none",
                outline: "none",
                width: "50px",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                lineHeight: "2.2rem",
                fontSize: ".5rem",
              }}
            />
            <text dy={+20} width={200}>
              Activité quotidienne
            </text>
            <Legend
              height={40}
              verticalAlign="top"
              align="right"
              iconType={"circle"}
              iconSize={8}
            />
            <Bar
              dataKey="kilogram"
              fill="#282d30"
              barSize={7}
              radius={[7, 7, 0, 0]}
              name="Poids (kg)"
              yAxisId={1}
            />
            <Bar
              yAxisId={2}
              dataKey="calories"
              fill="#e60000"
              barSize={7}
              radius={[7, 7, 0, 0]}
              name="Calories brûlées"
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ActivityChart;
