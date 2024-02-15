import React, { Dispatch, SetStateAction, useState } from "react";
import CustomInput from "../CustomComponents/Input/Input";
import CustomButton from "../CustomComponents/Button/Button";
import ErrorMessageDiv from "../CustomComponents/ErrorMessageDiv/ErrorMessageDiv";
import "./FormComponent.css";
import { onlyContainsNumbers } from "../../utils/BdayChallengeHelper";
import { addAttempt } from "../../utils/FirebaseHelper";

function FormComponent(props: {
  setPageState: Dispatch<SetStateAction<number>>;
}) {
  const { setPageState } = props;
  const [playerName, setPlayerName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!onlyContainsNumbers(time)) {
      setErrorMessage("Tid må være et heltall");
      setShowErrorMessage(true);
    } else {
      addAttempt(playerName, parseInt(time)).then(() => {
        setPageState(1);
      });
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
