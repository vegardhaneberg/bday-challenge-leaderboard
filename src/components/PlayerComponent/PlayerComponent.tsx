import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlayer } from "../../utils/FirebaseHelper";
import { Player } from "../../utils/TableUtils";

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
          <h1>{player.name}</h1>
          <h2>{player.time}</h2>
        </>
      )}
    </>
  );
}

export default PlayerComponent;
