import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
} from "recharts";

const Intensity = ({ data }: any) => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <RadarChart
        outerRadius={70}
        data={data}
        style={{ background: "#282d30", borderRadius: "10px" }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          axisLine={false}
          dataKey="kind"
          tickLine={false}
          tick={{
            dy: 4,
            fill: "#fff",
            fontSize: 12,
          }}
        />
        <Radar dataKey="value" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Intensity;
