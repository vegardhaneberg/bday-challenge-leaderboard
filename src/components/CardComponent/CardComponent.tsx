import { useNavigate } from "react-router-dom";
import "./CardComponent.css";

function CardComponent(props: {
  playerId: string;
  name: string;
  imgPath: string;
  birthday: string;
}) {
  const { playerId: id, name, imgPath, birthday } = props;
  const navigate = useNavigate();
  const navigateTo = (subPath: string) => {
    navigate(`/${subPath}`);
  };

  return (
    <div onClick={() => navigateTo(`player/${id}`)} className="cardWrapper">
      <div>
        <p className="playerName">{name}</p>
        <p className="playerBirthday">{birthday}</p>
      </div>

      <img src={imgPath} className="playerImage" />
    </div>
  );
}

export default CardComponent;
