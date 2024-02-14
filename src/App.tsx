import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebaseConfig";
import { get, ref } from "firebase/database";

export interface LeaderboardItem {
  name: string;
  time: number;
}

function App() {
  const [data, setData] = useState<LeaderboardItem[]>();

  useEffect(() => {
    const dataRef = ref(db, "items");
    get(dataRef).then((firebaseData) => {
      const convertedData: LeaderboardItem[] = Object.values(
        firebaseData.val()
      );
      setData(convertedData);
    });
  }, []);

  function getColor(i: number) {
    if (i < data!.length * 0.25) {
      return "green";
    }
    if (i < data!.length * 0.75) {
      return "yellow";
    }
    return "red";
  }

  function getFontSize(i: number) {
    if (i == 0) {
      return "2rem";
    }
    if (i == 1) {
      return "1.5rem";
    }
    return "unset";
  }

  return (
    <div className="leaderboard">
      <h1>Bday Challenge</h1>
      <ul>
        {data &&
          data.map((item, i) => (
            <li
              key={i}
              className="leaderboard-item"
              style={{ fontSize: getFontSize(i) }}
            >
              <span className="rank">
                {i + 1 < 10 ? " " + (i + 1).toString() : (i + 1).toString()}
              </span>
              <span className="name">{item.name}</span>
              <span className="time" style={{ color: getColor(i) }}>
                {item.time.toFixed(2)}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
