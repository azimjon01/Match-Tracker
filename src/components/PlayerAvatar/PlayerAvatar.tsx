import { FC } from "react";
import { CardContainer, Avatar, Name, Stats } from "./PlayerAvatar.styles";

interface PlayerAvatarProps {
  avatar: string;
  name: string;
  kills: number;
}

export const PlayerAvatar: FC<PlayerAvatarProps> = ({
  avatar,
  name,
  kills,
}) => {
  return (
    <CardContainer
      color="#101318"
      style={{
        gap: 8,
        borderRadius: 4,
      }}
    >
      <CardContainer style={{ gap: 8, padding: 0 }}>
        <Avatar src={avatar} alt={name} />
        <Name>{name}</Name>
      </CardContainer>
      <Stats>
        <span
          style={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#FAFAFA66",
            marginRight: 8,
          }}
        >
          Убийств:
        </span>
        <span
          style={{
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#F2F6F6",
          }}
        >
          {kills}
        </span>
      </Stats>
    </CardContainer>
  );
};
