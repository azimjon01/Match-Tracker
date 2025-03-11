import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const TeamCardWrapper = styled.div`
  background: #0b0e12;
  padding: 16px;
  border-radius: 4px;
  gap: 32px;
  color: white;
  margin-bottom: 12px;
`;

export const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

interface ContainerPlayProps {
  display?: "flex" | "grid" | "block" | "inline-block" | "inline-flex";
  align?: string;
  justify?: string;
  direction?: "row" | "column";
  gap?: number;
  columns?: string;
  width?: CSSProperties["width"];
}

export const ContainerPlay = styled.div<ContainerPlayProps>(
  ({
    display = "flex",
    align = "center",
    justify = "space-between",
    direction = "row",
    gap = 8,
    columns,
  }) => ({
    display,
    alignItems:
      display === "flex" || display === "inline-flex" ? align : undefined,
    justifyContent:
      display === "flex" || display === "inline-flex" ? justify : undefined,
    flexDirection:
      display === "flex" || display === "inline-flex" ? direction : undefined,
    gap: gap + "px",
    gridTemplateColumns: display === "grid" ? columns : undefined,
  }),
);

export const ContainerPlayOne = styled.div({
  // background: "pink",
  justifyContent: "center",
  alignItems: "center",
});

export const ContainerPlayTwo = styled.div({
  // background: "green",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%",
});

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
`;

export const PlayerCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1a1a1a;
  padding: 8px 12px;
  border-radius: 6px;
  color: White;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: purple;
`;
