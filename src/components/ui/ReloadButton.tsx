import styled from "@emotion/styled";
import { useRefreshStore } from "../../store/useRefreshStore";
import RefreshIcon from "../../assets/icons/RefreshIcon";

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #eb0237;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  transition:
    background 0.3s ease,
    transform 0.2s;

  &:hover {
    background-color: #a01131;
  }

  &:active {
    background-color: #701328;
    transform: scale(0.95);
  }
`;

const ReloadButton = () => {
  const { loading, startLoading, stopLoading } = useRefreshStore();

  const handleClick = () => {
    if (!loading) {
      startLoading();
      stopLoading();
    }
  };

  return (
    <RefreshButton onClick={handleClick}>
      Обновить
      <RefreshIcon loading={loading} size={20} />
    </RefreshButton>
  );
};

export default ReloadButton;
