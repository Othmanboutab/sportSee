import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
} from "recharts";

const Intensity = ({ data }: UserPerformance) => {
  const newData = data?.data?.map((item: { value: number; kind: number }) => ({
    value: item.value,
    kind: data.kind[item.kind],
  }));

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1.2}>
      <RadarChart
        outerRadius={70}
        data={newData}
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
