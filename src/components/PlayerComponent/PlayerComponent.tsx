import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlayer } from "../../utils/FirebaseHelper";
import { Player } from "../../utils/TableUtils";
import CenterCroppedImage from "../CustomComponents/CenterCroppedImage/CenterCroppedImage";
import "./PlayerComponent.css";

function PlayerComponent() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const playerId = pathParts[pathParts.length - 1];
  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    getPlayer(playerId).then((data) => setPlayer(data));
  }, [playerId]);
  return (
    <>
      {player && (
        <>
          {(player.name === "Vegard" ||
            player.name === "Mads" ||
            player.name === "Kate") && (
            <CenterCroppedImage imgPath={`/${player.name}.jpg`} size="15rem" />
          )}
          <h1>Navn: {player.name}</h1>
          <h2>Bursdag: {player.birthday}</h2>
          <h2>Alle forsøk:</h2>
          {player.attempts &&
            player.attempts.map((attempt, i) => (
              <div key={i}>
                {attempt.date}: {attempt.time} sekunder
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default PlayerComponent;
