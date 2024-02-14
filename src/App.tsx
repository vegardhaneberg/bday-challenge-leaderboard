import "./App.css";

export interface LeaderboardItem {
  name: string;
  time: string;
}

const leaderboardData: LeaderboardItem[] = [
  { name: "Larsi", time: "15" },
  { name: "Syver", time: "15.5" },
  { name: "Martin", time: "16" },
  { name: "Sverre", time: "17" },
  { name: "Mads", time: "18.3" },
  { name: "Agnes", time: "18.8" },
  { name: "Elise", time: "20.7" },
  { name: "Alfred", time: "21" },
  { name: "Vegard", time: "22" },
  { name: "Sigurd", time: "23.18" },
  { name: "Håkon", time: "24.65" },
  { name: "Eivind", time: "27.17" },
  { name: "Katty", time: "29.00" },
  { name: "Thomas", time: "29.96" },
  { name: "Bea", time: "32.00" },
  { name: "Daniel", time: "37.00" },
  { name: "Kate", time: "45.00" },
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
