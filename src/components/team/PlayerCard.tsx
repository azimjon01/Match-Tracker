import { Player } from "../../types/team";
import { PlayerCardWrapper, Avatar } from "./styles";

const PlayerCard = ({ player }: { player: Player }) => {
  return (
    <PlayerCardWrapper>
      <Avatar />
      <div>
        <div>{player.name}</div>
        <small>Убийства: {player.kills}</small>
      </div>
    </PlayerCardWrapper>
  );
};

export default PlayerCard;
