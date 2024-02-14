import "./App.css";

export interface LeaderboardItem {
  name: string;
  time: string;
}

const leaderboardData: LeaderboardItem[] = [
  { name: "Alice", time: "2m 10s" },
  { name: "Bob", time: "2m 20s" },
  { name: "Charlie", time: "2m 30s" },
  { name: "Alice", time: "2m 10s" },
  { name: "Bob", time: "2m 20s" },
  { name: "Charlie", time: "2m 30s" },
  { name: "Alice", time: "2m 10s" },
  { name: "Bob", time: "2m 20s" },
  { name: "Charlie", time: "2m 30s" },
  { name: "Alice", time: "2m 10s" },
  { name: "Bob", time: "2m 20s" },
  { name: "Charlie", time: "2m 30s" },
  { name: "Alice", time: "2m 10s" },
  { name: "Bob", time: "2m 20s" },
  { name: "Charlie", time: "2m 30s" },
  { name: "Alice", time: "2m 10s" },
  { name: "Bob", time: "2m 20s" },
  { name: "Charlie", time: "2m 30s" },
];

function App() {
  return (
    <div className="leaderboard">
      <h1>Bday Challenge leaderboard</h1>
      <ul>
        {leaderboardData.map((item, i) => (
          <li key={i} className="leaderboard-item">
            <span className="rank">{i + 1}</span>
            <span className="name">{item.name}</span>
            <span className="time">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
