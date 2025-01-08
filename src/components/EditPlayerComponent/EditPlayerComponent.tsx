import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPlayer, updateStatsForPlayer } from "../../utils/FirebaseHelper";
import { Player } from "../../utils/TableUtils";
import BarComponent from "../BarComponent/BarComponent";
import CustomInput from "../CustomComponents/Input/Input";
import CustomButton from "../CustomComponents/Button/Button";

function EditPlayerComponent() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const playerId = pathParts[pathParts.length - 1];
  const [player, setPlayer] = useState<Player>();
  const [newBongScore, setNewBongScore] = useState<number>();
  const [newBreezerScore, setNewBreezerScore] = useState<number>();
  const [newShotScore, setNewShotScore] = useState<number>();

  const navigate = useNavigate();

  useEffect(() => {
    getPlayer(playerId).then((data) => {
      setPlayer(data);
    });
  }, [playerId]);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      newBongScore === undefined ||
      newBreezerScore === undefined ||
      newShotScore === undefined ||
      newBongScore === null ||
      newBreezerScore === null ||
      newShotScore === null
    ) {
      return;
    }

    const stats = [
      {
        name: "Bong",
        value: newBongScore,
      },
      {
        name: "Breezer",
        value: newBreezerScore,
      },
      {
        name: "Shot",
        value: newShotScore,
      },
    ];
    updateStatsForPlayer(player!, stats).then(() =>
      navigate(`/player/${player!.id}`)
    );
  }

  return (
    <>
      {player && (
        <>
          <h1>{player.name}</h1>
          <div className="formWrapper">
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div className="join-game-form">
                <CustomInput
                  type="number"
                  value={newBongScore}
                  required
                  placeholder="Bong"
                  onChange={(e) => setNewBongScore(parseInt(e.target.value))}
                />
                <CustomInput
                  type="number"
                  value={newBreezerScore}
                  required
                  placeholder="Breezer"
                  onChange={(e) => setNewBreezerScore(parseInt(e.target.value))}
                />
                <CustomInput
                  type="number"
                  value={newShotScore}
                  required
                  placeholder="Shot"
                  onChange={(e) => setNewShotScore(parseInt(e.target.value))}
                />
                <CustomButton label="Oppdater" variant="initial" />
              </div>
            </form>
          </div>
          <BarComponent stats={player.stats} />
        </>
      )}
    </>
  );
}

export default EditPlayerComponent;
