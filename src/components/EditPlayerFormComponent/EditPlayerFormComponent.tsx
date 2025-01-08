import React, { useState } from "react";
import { getPlayerByName } from "../../utils/FirebaseHelper";
import CustomInput from "../CustomComponents/Input/Input";
import CustomButton from "../CustomComponents/Button/Button";
import ErrorMessageDiv from "../CustomComponents/ErrorMessageDiv/ErrorMessageDiv";
import { useNavigate } from "react-router-dom";

function EditPlayerFormComponent() {
  const [playerInputName, setPlayerInputName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleNameSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password === "Heisann" || password === "heisann") {
      getPlayerByName(playerInputName).then((data) => {
        if (data === undefined || data === null) {
          setErrorMessage("Fant ikke noen spiller med dette navnet");
          setShowErrorMessage(true);
          return;
        }
        navigate(`/editplayer/${data.id}`);
      });
    } else {
      setErrorMessage("Feil passord");
      setShowErrorMessage(true);
    }
  }

  return (
    <>
      <div className="formWrapper">
        <h2 className="formDescription">Fyll inn navn under</h2>
        <form onSubmit={(e) => handleNameSubmit(e)}>
          <div className="join-game-form">
            <CustomInput
              type="text"
              value={playerInputName}
              required
              placeholder="Navn"
              onChange={(e) => setPlayerInputName(e.target.value)}
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
      </div>
    </>
  );
}

export default EditPlayerFormComponent;
