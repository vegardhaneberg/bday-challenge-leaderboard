import { useNavigate } from "react-router-dom";
import "./CardComponent.css";
import { Player } from "../../utils/TableUtils";
import CenterCroppedImage from "../CustomComponents/CenterCroppedImage/CenterCroppedImage";
import { useEffect, useState } from "react";
import { getBestAttempt } from "../../utils/BdayChallengeHelper";

function CardComponent(props: { player: Player; imgPath: string }) {
  const { player, imgPath } = props;
  const [bestTime, setBestTime] = useState<number>();
  const navigate = useNavigate();
  const navigateTo = (subPath: string) => {
    navigate(`/${subPath}`);
  };

  useEffect(() => {
    const bestAttempt = getBestAttempt(player.attempts);
    setBestTime(bestAttempt!.time);
  }, [player]);

  return (
    <div
      onClick={() => navigateTo(`player/${player.id}`)}
      className="cardWrapper"
    >
      <div>
        <p className="playerName">{player.name}</p>
        <p className="playerBirthday">{player.birthday}</p>
        <p className="playerBirthday">{bestTime} sek</p>
      </div>

      {player.name !== "Vegard" &&
        player.name !== "Mads" &&
        player.name !== "Kate" && <img src={imgPath} className="playerImage" />}

      {player.name === "Vegard" && (
        <CenterCroppedImage imgPath="Vegard.jpg" size="6rem" />
      )}
      {player.name === "Mads" && (
        <CenterCroppedImage imgPath="Mads.jpg" size="6rem" />
      )}
      {player.name === "Kate" && (
        <CenterCroppedImage imgPath="Kate.jpg" size="6rem" />
      )}
    </div>
  );
}

export default CardComponent;
