import { useEffect, useState } from "react";
import { Player } from "../../utils/TableUtils";
import { getPlayers } from "../../utils/FirebaseHelper";
import CardComponent from "../CardComponent/CardComponent";
import "./PlayersComponent.css";

function PlayersComponent() {
  const [data, setData] = useState<Player[]>([]);
  useEffect(() => {
    getPlayers(false).then((data) => setData(data));
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
              birthday={item.birthday}
            />
          ))}
      </div>
    </>
  );
}

export default PlayersComponent;
