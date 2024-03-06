import { useEffect, useState } from "react";
import { Player } from "../../utils/TableUtils";
import { getPlayers } from "../../utils/FirebaseHelper";
import CardComponent from "../CardComponent/CardComponent";
import "./PlayersComponent.css";

function PlayersComponent() {
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    getPlayers(false).then((data) => setPlayers(data));
  }, []);
  return (
    <>
      <h1>&#127866; Spillere &#127866; </h1>
      <div className="cardsWrapper">
        {players &&
          players.map((item, i) => (
            <CardComponent key={i} player={item} imgPath="beer copy.png" />
          ))}
      </div>
    </>
  );
}

export default PlayersComponent;
