import { Dispatch, SetStateAction } from "react";
import "./HeaderComponent.css";

export function HeaderComponent(props: {
  setGlobalState: Dispatch<SetStateAction<number>>;
}) {
  const { setGlobalState } = props;

  function handleOnClick(stateNumber: number) {
    console.log("lol");
    setGlobalState(stateNumber);
  }
  return (
    <div className="wrapper">
      <div className="leftWrapper">
        <div style={{ fontSize: "2rem" }}>&#127866;</div>
        <div className="title" onClick={() => handleOnClick(1)}>
          Bday challenge
        </div>
      </div>
      <div className="rightWrapper">
        <div className="rightMenuItem" onClick={() => handleOnClick(2)}>
          Legg til nytt forsøk
        </div>
        <div className="rightMenuItem" onClick={() => handleOnClick(3)}>
          Spillere
        </div>
        <div className="rightMenuItem" onClick={() => handleOnClick(4)}>
          Content!
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
