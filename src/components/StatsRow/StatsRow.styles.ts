import styled from "@emotion/styled";

export const RowContainer = styled.div({
  background: "#101318",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 8,
  width: "100%",
  maxWidth: 800,
  gap: 16,
});

export const StateItem = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  borderRadius: 4,
  width: "100%",
});

export const Label = styled.span({
  fontsize: 14,
  fontWeight: 500,
  lineHeight: "150%",
  letterSpacing: "0%",
  color: "#FAFAFA66",
});

export const Value = styled.span({
  fontsize: 16,
  fontWeight: 600,
  color: "#F2F6F6",
  lineHeight: "150%",
  letterSpacing: "0%",
});

export const Divider = styled.div({
  width: 1,
  height: 16,
  backgroundColor: "#333",
  margin: "0 8px",
});
