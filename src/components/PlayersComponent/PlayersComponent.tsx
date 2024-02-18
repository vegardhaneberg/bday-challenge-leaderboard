import { useEffect, useState } from "react";
import { LeaderboardItem } from "../../utils/TableUtils";
import { getLeaderboardItems } from "../../utils/FirebaseHelper";
import CardComponent from "../CardComponent/CardComponent";
import "./PlayersComponent.css";

function PlayersComponent() {
  const [data, setData] = useState<LeaderboardItem[]>([]);
  useEffect(() => {
    getLeaderboardItems(false).then((data) => setData(data));
  }, []);
  return (
    <>
      <h1>&#127866; Spillere &#127866; </h1>
      <div className="cardsWrapper">
        {data &&
          data.map((item, i) => (
            <CardComponent
              key={i}
              playerId={item.id}
              name={item.name}
              imgPath="beer copy.png"
            />
          ))}
      </div>
    </>
  );
}

export default PlayersComponent;
