import { FC } from "react";
import {
  Divider,
  Label,
  RowContainer,
  StateItem,
  Value,
} from "./StatsRow.styles";

interface Stat {
  label: string;
  value: string | number;
}

interface StatsRowProps {
  stats: Stat[];
}

export const StatRow: FC<StatsRowProps> = ({ stats }) => {
  return (
    <RowContainer
      color="#101318"
      style={{ padding: "10px 14px 10px 14px", borderRadius: 4, gap: 8 }}
    >
      {stats.map((stat, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <StateItem>
            <Label>{stat.label}:</Label>
            <Value>{stat.value}</Value>
          </StateItem>
          {index !== stats.length - 1 && <Divider />}
        </div>
      ))}
    </RowContainer>
  );
};
