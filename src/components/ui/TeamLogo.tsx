import styled from "@emotion/styled";

interface TeamLogoProps {
  src?: string;
  alt?: string;
  size?: number;
}

export function TeamLogo({ src, alt = "Team Logo", size = 64 }: TeamLogoProps) {
  return (
    <StyledLogo
      src={src || "/assets/icons/default-logo.svg"}
      alt={alt}
      size={size}
    />
  );
}

const StyledLogo = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 8px;
  object-fit: cover;
`;
