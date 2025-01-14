import styled from "styled-components";

const AsidePanelContainer = styled.div`
  width: 190px;
  height: 210px;
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 14px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction:column;
`;

const Title = styled.div`
  font-size: 12px;
  // font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #555;
  cursor: pointer;

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &:hover {
    color: #000;
  }
`;

function AsidePanel() {
  return (
    <AsidePanelContainer>
      <Title>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </Title>
      <CheckboxContainer>
        <CheckboxLabel>
          <input type="checkbox" />
          Все
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Без пересадок
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />1 пересадка
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />2 пересадка
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />3 пересадка
        </CheckboxLabel>
      </CheckboxContainer>
    </AsidePanelContainer>
  );
}

export default AsidePanel;
