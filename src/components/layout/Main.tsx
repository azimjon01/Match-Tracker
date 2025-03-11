import styled from "@emotion/styled";
import TeamCard from "../team/TeamCard";

const StyledMain = styled.main`
  margin-top: 118px;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <StyledMain>
      <TeamCard isLive="finished" />
      <TeamCard isLive="preparing" />
      <TeamCard isLive="live" />
      <TeamCard isLive="preparing" />
      <TeamCard isLive="finished" />
      <TeamCard isLive="live" />
    </StyledMain>
  );
};

export default Main;
