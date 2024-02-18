import "./FormComponent.css";
import {
  addAttemptForExistingPlayer,
  addAttemptForNewPlayer,
  getPlayerByName,
} from "../../utils/FirebaseHelper";
import CustomInput from "../CustomComponents/Input/Input";
import ErrorMessageDiv from "../CustomComponents/ErrorMessageDiv/ErrorMessageDiv";
import CustomButton from "../CustomComponents/Button/Button";
import { onlyContainsNumbers } from "../../utils/BdayChallengeHelper";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Attempt } from "../../utils/TableUtils";

function FormComponent() {
  const [playerName, setPlayerName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();
  const navigateTo = (subPath: string) => {
    navigate(`/${subPath}`);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!onlyContainsNumbers(time)) {
      setErrorMessage("Tid må være et heltall");
      setShowErrorMessage(true);
    } else {
      const existingPlayer = await getPlayerByName(playerName);
      if (existingPlayer === undefined) {
        console.log("Adding new player with attempt");
        await addAttemptForNewPlayer(playerName, parseInt(time));
      } else {
        console.log("Adding attempt for existing player");
        const newAttempt: Attempt = { time: time, date: "1. Jan" };
        existingPlayer.attempts.push(newAttempt);
        await addAttemptForExistingPlayer(existingPlayer);
      }
      navigateTo("");
    }
  }

  return (
    <div className="formWrapper">
      <h1 className="formHeader">&#127866; Legg til nytt forsøk &#127866;</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="join-game-form">
          <CustomInput
            type="text"
            value={playerName}
            required
            placeholder="Navn"
            onChange={(e) => setPlayerName(e.target.value)}
          />{" "}
          <CustomInput
            type="text"
            value={time}
            required
            placeholder="Tid"
            onChange={(e) => setTime(e.target.value)}
          />
          {showErrorMessage && <ErrorMessageDiv text={errorMessage} />}
          <CustomButton label="Legg til" variant="initial" />
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
