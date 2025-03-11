import styled from "@emotion/styled";

interface ScoreLiveProps {
  score: string;
  status: "live" | "finished" | "preparing";
}

const ScoreLive = ({ score, status }: ScoreLiveProps) => {
  return (
    <ScoreLiveContainer>
      <ScoreText>{score}</ScoreText>
      <LiveButton status={status}>{getStatusText(status)}</LiveButton>
    </ScoreLiveContainer>
  );
};

const getStatusText = (status: "live" | "finished" | "preparing") => {
  switch (status) {
    case "live":
      return "Live";
    case "finished":
      return "Finished";
    case "preparing":
      return "Match Preparing";
    default:
      return "abandoned";
  }
};

const ScoreLiveContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

const ScoreText = styled.div({
  fontSize: 20,
  fontWeight: 600,
  color: "#fff",
  lineHeight: "100%",
  letterSpacing: "0%",
  marginBottom: 4,
});

const LiveButton = styled.div<{ status: "live" | "finished" | "preparing" }>(
  ({ status }) => ({
    padding: "6px 8px 6px 8px",
    borderRadius: 4,
    fontSize: 12,
    gap: 10,
    fontWeight: 600,
    color: "#fff",
    backgroundColor:
      status === "live"
        ? "#43AD28"
        : status === "finished"
          ? "#EB0237"
          : "#EB6402",
  }),
);

export default ScoreLive;
