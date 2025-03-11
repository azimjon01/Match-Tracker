import { useState } from "react";
import styled from "@emotion/styled";
import arrowup from "../../../public/assets/images/arrowup2.png";
import arrowdown from "../../../public/assets/images/arrowdown2.png";

const statuses = ["Все статусы", "Live", "Finished", "Match preparing"];

const DropdownContainer = styled.div({
  position: "relative",
  width: "180px",
});

const DropdownButton = styled.button<{ isOpen: boolean }>(({ isOpen }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: isOpen ? "#0b0e12" : "#0b0e12",
  width: 170,
  color: "#b4b5b6",
  marginBottom: 8,
  border: "none",
  gap: 12,
  padding: "10px 20px 10px 16px",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: 16,
  lineHeight: "150%",
  letterSpacing: "0%",
  fontWeight: 500,
  transition: "background 0.3s ease",
  appearance: "none",

  "&:hover": {
    background: "#292929",
  },
}));

const Icon = styled.img({
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
});

const DropdownList = styled.ul<{ isOpen: boolean }>(({ isOpen }) => ({
  position: "absolute",
  width: "95%",
  background: "#0F1318",
  borderRadius: "4px",
  listStyle: "none",
  padding: "8px 12px 8px 12px",
  margin: 0,
  display: isOpen ? "block" : "none",
  zIndex: 10,
}));

const DropdownItem = styled.li({
  padding: "8px 12px 8px 12px",
  gap: 8,
  cursor: "pointer",
  color: "#B4B5B6",
  fontSize: "16px",
  "&:hover": {
    background: "#292b30",
  },
});

const StatusDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(statuses[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (status: string) => {
    setSelected(status);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen}>
        {selected} <Icon src={isOpen ? arrowup : arrowdown} alt="arrow" />
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {statuses.map((status) => (
          <DropdownItem key={status} onClick={() => handleSelect(status)}>
            {status}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default StatusDropdown;
