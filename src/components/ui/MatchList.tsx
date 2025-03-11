import React from "react";
import { useMatchStore } from "../../store/useMatchStore";
import MatchItem from "./MatchItem";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const MatchList: React.FC = () => {
  const { matches } = useMatchStore();

  return (
    <Container>
      {matches.map((match) => (
        <MatchItem key={match.id} match={match} />
      ))}
    </Container>
  );
};

export default MatchList;
