import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomCursor = ({ points }: any) => {
  const X = points[0].x;
  const Y = points[0].y;

  return (
    <Rectangle
      width={1000}
      height={1000}
      x={X}
      y={Y - 100}
      style={{ background: "red", opacity: 0.1 }}
    />
  );
};

const TooltipText = (payload: any) => {
  if (typeof payload[0].unit !== "undefined") {
    return (
      <p>
        {payload[0].value} {payload[0].unit}
      </p>
    );
  }
  if (payload && payload.length) {
    return payload.map((prop: any, id: any) => {
      return prop.dataKey === "calories" ? (
        <li key={id}>{prop.value}kCal</li>
      ) : (
        <li key={id}>{prop.value}Kg</li>
      );
    });
  }

  return "";
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return <ul>{TooltipText(payload)}</ul>;
  }
};

const COLOR = "#ffffffa4";

const SessionChart = ({ data }: any) => {
  if (!data) return null;
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        data={data}
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
            width: "75px",
            height: "45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            outline: "none",
          }}
          labelStyle={{ display: "none", border: "none" }}
          content={<CustomTooltip />}
          cursor={<CustomCursor />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SessionChart;
