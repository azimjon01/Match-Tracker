import styled from "@emotion/styled";

export const CardContainer = styled.div({
  background: "#101318",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 14px 0 14px",
  gap: 8,
});

export const Avatar = styled.img({
  width: 36,
  height: 36,
});

export const Name = styled.div({
  fontsize: 16,
  fontWeight: 600,
  color: "#fafafa",
  lineHeight: "150%",
  letterSpacing: "0%",
});

export const Stats = styled.div({
  borderRadius: 4,
  gap: 8,
});
