import ScoreLive from "../ui/ScoreLive";
import { TeamLogo } from "../ui/TeamLogo";
import {
  TeamCardWrapper,
  TeamHeader,
  ContainerPlay,
  ContainerPlayOne,
} from "./styles";
import { AccordionToggle } from "../Accordion";
import { useState } from "react";
import { PlayerAvatar } from "../PlayerAvatar/PlayerAvatar";
import { StatRow } from "../StatsRow";

interface TeamCardProps {
  isLive: "live" | "finished" | "preparing";
}

const TeamCard = ({ isLive }: TeamCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = [
    { label: "Points", value: "+50" },
    { label: "Место", value: 7 },
    { label: "Всего убийств", value: 12 },
  ];
  return (
    <TeamCardWrapper>
      <TeamHeader>
        <ContainerPlay gap={14}>
          <TeamLogo size={48} alt="Command №1" />
          <h2
            style={{
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "100%",
              letterSpacing: 0,
            }}
          >
            Command №1
          </h2>
        </ContainerPlay>
        <ContainerPlay>
          <ScoreLive score="2:1" status={isLive} />
        </ContainerPlay>
        <ContainerPlay>
          <h2
            style={{
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "100%",
              letterSpacing: 0,
              marginRight: 14,
            }}
          >
            Command №2
          </h2>
          <TeamLogo size={48} alt="Command №2" />
          <AccordionToggle
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
          />
        </ContainerPlay>
      </TeamHeader>

      {isOpen && (
        <ContainerPlay
          gap={32}
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            borderRadius: 4,
            marginTop: 32,
          }}
        >
          <ContainerPlayOne>
            <ContainerPlay style={{ display: "block" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <PlayerAvatar
                  avatar="/assets/images/avatar_global.png"
                  name="User1"
                  kills={4}
                />
                <PlayerAvatar
                  avatar="/assets/images/avatar_global.png"
                  name="User2"
                  kills={4}
                />
                <PlayerAvatar
                  avatar="/assets/images/avatar_global.png"
                  name="User3"
                  kills={4}
                />
              </div>
            </ContainerPlay>
            <ContainerPlay gap={8} color="#101318" style={{ borderRadius: 4 }}>
              <StatRow stats={stats} />
            </ContainerPlay>
          </ContainerPlayOne>
          <ContainerPlayOne>
            <ContainerPlay style={{ display: "block" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <PlayerAvatar
                  avatar="/assets/images/avatar_global.png"
                  name="User1"
                  kills={4}
                />
                <PlayerAvatar
                  avatar="/assets/images/avatar_global.png"
                  name="User2"
                  kills={4}
                />
                <PlayerAvatar
                  avatar="/assets/images/avatar_global.png"
                  name="User3"
                  kills={4}
                />
              </div>
            </ContainerPlay>
            <ContainerPlay gap={8} color="#101318" style={{ borderRadius: 4 }}>
              <StatRow stats={stats} />
            </ContainerPlay>
          </ContainerPlayOne>
        </ContainerPlay>
      )}
    </TeamCardWrapper>
  );
};

export default TeamCard;
