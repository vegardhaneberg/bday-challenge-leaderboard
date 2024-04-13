import "./FormComponent.css";
import {
  addAttemptForExistingPlayer,
  addAttemptForNewPlayer,
  getPlayerByName,
} from "../../utils/FirebaseHelper";
import CustomInput from "../CustomComponents/Input/Input";
import ErrorMessageDiv from "../CustomComponents/ErrorMessageDiv/ErrorMessageDiv";
import CustomButton from "../CustomComponents/Button/Button";
import {
  getCurrentDateAsString,
  onlyContainsNumbers,
} from "../../utils/BdayChallengeHelper";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Attempt } from "../../utils/TableUtils";

function FormComponent() {
  const [playerName, setPlayerName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formState, setFormState] = useState<number>(1);

  const navigate = useNavigate();
  const navigateTo = (subPath: string) => {
    navigate(`/${subPath}`);
  };

  async function handleNameSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== "bday") {
      setErrorMessage("Feil passord!");
      setShowErrorMessage(true);
      return;
    }

    const existingPlayer = await getPlayerByName(playerName);
    if (existingPlayer === undefined) {
      setFormState(2);
    } else setFormState(3);
  }

  async function handleNewPlayerSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!onlyContainsNumbers(time)) {
      setErrorMessage("Tid må være et tall");
      setShowErrorMessage(true);
      return;
    } else {
      await addAttemptForNewPlayer(playerName, parseFloat(time.replace(',', '.')), birthday);
    }
    navigateTo("");
  }

  async function handleExistingPlayerSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    if (!onlyContainsNumbers(time)) {
      setErrorMessage("Tid må være et heltall");
      setShowErrorMessage(true);
      return;
    } else {
      const existingPlayer = await getPlayerByName(playerName);
      if (existingPlayer === undefined) {
        setErrorMessage("En feil oppstod");
        setShowErrorMessage(true);
        return;
      }
      const newAttempt: Attempt = {
        time: parseFloat(time.replace(',', '.')),
        date: getCurrentDateAsString(),
      };
      existingPlayer.attempts.push(newAttempt);
      await addAttemptForExistingPlayer(existingPlayer);
    }
    navigateTo("");
  }

  return (
    <div className="formWrapper">
      <h1 className="formHeader">&#127866; Legg til nytt forsøk &#127866;</h1>
      {formState === 1 && (
        <>
          <h2 className="formDescription">Fyll inn navn og passord under</h2>
          <form onSubmit={(e) => handleNameSubmit(e)}>
            <div className="join-game-form">
              <CustomInput
                type="text"
                value={playerName}
                required
                placeholder="Navn"
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <CustomInput
                type="text"
                value={password}
                required
                placeholder="Passord"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showErrorMessage && <ErrorMessageDiv text={errorMessage} />}
              <CustomButton label="Neste" variant="initial" />
            </div>
          </form>
        </>
      )}

      {formState === 2 && (
        <>
          <h2 className="formDescription">
            {playerName} er en ny deltaker! Fyll inn informasjonen under,
            forsøket blir lagret på dagens dato
          </h2>
          <form onSubmit={(e) => handleNewPlayerSubmit(e)}>
            <div className="join-game-form">
              <CustomInput
                type="text"
                value={time}
                required
                placeholder="Tid"
                onChange={(e) => setTime(e.target.value)}
              />
              <CustomInput
                type="text"
                value={birthday}
                required
                placeholder="Bursdag"
                onChange={(e) => setBirthday(e.target.value)}
              />
              {showErrorMessage && <ErrorMessageDiv text={errorMessage} />}
              <CustomButton label="Legg til" variant="initial" />
            </div>
          </form>
        </>
      )}

      {formState === 3 && (
        <>
          <h2 className="formDescription">
            Eyy {playerName} har gjort det før! Klarte luringen å slå tiden sin?
          </h2>
          <form onSubmit={(e) => handleExistingPlayerSubmit(e)}>
            <div className="join-game-form">
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
        </>
      )}
    </div>
  );
}

export default FormComponent;
