import { FC } from "react";
import { ToggleButton } from "./AccordionToggle.styles";

interface AccordionToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionToggle: FC<AccordionToggleProps> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <ToggleButton
      isOpen={isOpen}
      onClick={onToggle}
      aria-label="Toggle Accordion"
    />
  );
};
