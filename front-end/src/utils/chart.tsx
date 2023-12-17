export const CustomizedAxisTick = ({ payload, x, y }: any) => {
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

export const TooltipText = (payload: any) => {
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
        <li key={`calories-${id}`}>{prop.value}kCal</li>
      ) : (
        <li key={`calories-${id}`}>{prop.value}Kg</li>
      );
    });
  }

  return "";
};

export const CustomTooltip = ({ active, payload }: any) =>
  active && payload && payload.length && <ul>{TooltipText(payload)}</ul>;
