import styled from "@emotion/styled";

export const ToggleButton = styled.button<{ isOpen: boolean }>(
  ({ isOpen }) => ({
    width: 32,
    height: 32,
    border: "none",
    cursor: "pointer",
    background: "transparent",
    backgroundImage: "url(/assets/icons/chevron-up.svg)",
    rotate: isOpen ? "180deg" : "0",

    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    transition: "transform 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      opacity: 0.8,
    },
  }),
);
