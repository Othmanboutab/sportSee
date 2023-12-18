import { Rectangle } from "recharts";

export const CustomizedAxisTick = ({
  payload,
  x,
  y,
}: {
  payload: Record<string, any>;
  x: number;
  y: number;
}) => {
  const dateString = payload.value;
  const dateObject = new Date(dateString);
  const dayOfMonth = dateObject.getDate();

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={25} fill="#999">
        {dayOfMonth}
      </text>
    </g>
  );
};

export const TooltipText = (payload: Record<string, any>) => {
  if (typeof payload[0].unit !== "undefined") {
    return (
      <p>
        {payload[0].value}
        {payload[0].unit}
      </p>
    );
  }
  if (payload && payload.length) {
    return payload.map((prop: Record<string, any>, id: string) => {
      return prop.dataKey === "calories" ? (
        <li key={`calories-${id}`}>{prop.value}kCal</li>
      ) : (
        <li key={`calories-${id}`}>{prop.value}Kg</li>
      );
    });
  }

  return "";
};

export const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: Record<string, any>;
}) =>
  active &&
  payload &&
  payload.length && (
    <ul className="tooltip-container">{TooltipText(payload)}</ul>
  );

export const CustomCursor = ({ points }: Record<string, any>) => {
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

export const CustomScoreData = (payload: Record<string, any>) => {
  return (
    <div className="custom-legend-score">
      <p className="custom-legend-score-data">
        {payload?.payload[0]?.payload.todayScore}%
      </p>
      <p className="custom-legend-score-objective"> de votre objectif</p>
    </div>
  );
};
