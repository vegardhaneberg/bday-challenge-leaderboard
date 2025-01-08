import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlayer } from "../../utils/FirebaseHelper";
import { Attempt, Player } from "../../utils/TableUtils";
import CenterCroppedImage from "../CustomComponents/CenterCroppedImage/CenterCroppedImage";
import "./PlayerComponent.css";
import GraphComponent from "../GraphComponent/GraphComponent";
import { getBestAttempt } from "../../utils/BdayChallengeHelper";
import BarComponent from "../BarComponent/BarComponent";

function PlayerComponent() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const playerId = pathParts[pathParts.length - 1];
  const [player, setPlayer] = useState<Player>();
  const [bestAttempt, setBestAttempt] = useState<Attempt>();

  useEffect(() => {
    getPlayer(playerId).then((data) => {
      setPlayer(data);
      setBestAttempt(getBestAttempt(data.attempts));
    });
  }, [playerId]);

  return (
    <>
      {player && (
        <>
          {(player.name === "Vegard" ||
            player.name === "Mads" ||
            player.name === "Kate" ||
            player.name === "Sofie" ||
            player.name === "Larsi" ||
            player.name === "Haakon" ||
            player.name === "Daniel" ||
            player.name === "Katty" ||
            player.name === "Syver" ||
            player.name === "Martin") && (
            <CenterCroppedImage imgPath={`/${player.name}.jpg`} size="15rem" />
          )}
          <h1 className="player-header">{player.name}</h1>
          <h2 className="player-description">🎉 {player.birthday} 🎉</h2>
          <h2 className="player-description">
            🏆 Beste tid: {bestAttempt?.time}s 🏆
          </h2>
          {player.attempts.length > 1 && <GraphComponent player={player} />}
          {player.attempts.length <= 1 && (
            <div style={{ marginTop: "2rem" }}>
              <h3 className="player-description-small">
                {player.name} har bare gjort ett forsøk😡
              </h3>
              <h3 className="player-description-small">Tørre å prøve igjen</h3>
            </div>
          )}
          <BarComponent stats={player.stats} />
        </>
      )}
    </>
  );
}

export default PlayerComponent;
