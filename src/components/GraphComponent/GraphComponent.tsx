import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { Player } from "../../utils/TableUtils";
import "./GraphComponent.css";

interface PlayerAttemptsGraphProps {
  player: Player;
}

const PlayerAttemptsGraph: React.FC<PlayerAttemptsGraphProps> = ({
  player,
}) => {
  const times = player.attempts.map((a) => a.time);
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const aspect = window.innerWidth < 750 ? 1.5 : 2;

  return (
    <div className="container mt-4">
      <div
        className="graph-container"
        style={{
          width: "100%",
          marginLeft: "-30px",
        }}
      >
        <ResponsiveContainer width="100%" aspect={aspect}>
          <LineChart
            data={player.attempts}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="date"
              tickFormatter={(date) => {
                return date.slice(-4) === "1990" ? "2022" : date.slice(-4);
              }}
              stroke="#000"
              tick={{ fill: "#000" }}
            />
            <YAxis
              domain={[Math.round(minTime - 1), Math.round(maxTime + 1)]}
              stroke="#000"
              tick={{ fill: "#000" }}
            />
            <Line
              type="monotone"
              dataKey="time"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlayerAttemptsGraph;
