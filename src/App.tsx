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

  return (
    <div className="leaderboard">
      <h1>Bday Challenge</h1>
      <ul>
        {data &&
          data.map((item, i) => (
            <li key={i} className="leaderboard-item">
              <span className="rank">{i + 1}</span>
              <span className="name">{item.name}</span>
              <span className="time">{item.time.toFixed(2)}</span>
            </li>
          ))}
      </ul>
    </div>
    // <div className="leaderboard">
    //   <h1>Leaderboard</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Rank</th>
    //         <th>Name</th>
    //         <th>Time</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data &&
    //         data.map((item, index) => (
    //           <tr key={index}>
    //             <td>{index + 1}</td>
    //             <td>{item.name}</td>
    //             <td>{item.time.toFixed(2)}</td>
    //           </tr>
    //         ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default App;
