import styled from "@emotion/styled";

interface ContainerProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: string;
  center?: boolean;
}

const maxWidthValues = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  full: "100%",
};

export const Container = styled.div<ContainerProps>`
  background-color: #06080c;
  width: 100%;
  max-width: ${({ maxWidth = "xl" }) => maxWidthValues[maxWidth]};
  margin: 0 auto;
  padding: ${({ padding = "16px" }) => padding};

  ${({ center }) =>
    center &&
    `
      display:flex;
      align-items:center;
      justify-content:center;
    `}
`;
