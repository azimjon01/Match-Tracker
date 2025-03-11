import React from "react";
import styled from "@emotion/styled";
import ReloadButton from "../ui/ReloadButton";
import StatusDropdown from "../ui/statusDropdown";
import logo from "../../../public/assets/images/Match Tracker.png";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #06080c;
  width: 100%;
  padding: 12px 24px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
  }
`;

const Logo = styled.img`
  width: 257px;
  height: 32px;
  margin-top: -15px;
  object-fit: contain;
`;

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 18px;
  background: #0f1318;
  padding: 16px;
  border-radius: 4px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;

  span:first-child {
    font-size: 18px;
    color: #eb0237;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const LogoStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoStatusContainer>
        <Logo src={logo} alt="Company Logo" />
        <StatusDropdown />
      </LogoStatusContainer>
      <ErrorContainer>
        <ErrorBox>
          <span>⚠</span>
          <span>Ошибка: не удалось загрузить информацию</span>
        </ErrorBox>
        <ReloadButton />
      </ErrorContainer>
    </HeaderContainer>
  );
};

export default Header;
