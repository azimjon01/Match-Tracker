import React from "react";
import styled from "@emotion/styled";
import { Match } from "../../store/useMatchStore";

interface MatchProps {
  match: Match;
}

const MatchCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background: #222;
  border-radius: 5px;
  color: white;
`;

const Score = styled.span<{ status: string }>`
  color: ${(props) => (props.status === "Live" ? "green" : "red")};
  font-weight: bold;
`;

const MatchItem: React.FC<MatchProps> = ({ match }) => {
  return (
    <MatchCard>
      <span>
        {match.team1} vs {match.team2}
      </span>
      <Score status={match.status}>{match.score}</Score>
    </MatchCard>
  );
};

export default MatchItem;
