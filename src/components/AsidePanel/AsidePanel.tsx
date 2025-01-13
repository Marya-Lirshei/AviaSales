import styled from "styled-components";

const AsidePanelContainer = styled.div`
  max-width: 250px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function AsidePanel() {
  return (
    <AsidePanelContainer>
      <div>
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Все
        </label>
        <label>
          <input type="checkbox" />
          Без пересадок
        </label>
        <label>
          <input type="checkbox" />1 пересадка
        </label>
        <label>
          <input type="checkbox" />2 пересадка
        </label>
        <label>
          <input type="checkbox" />3 пересадка
        </label>
      </div>
    </AsidePanelContainer>
  );
}

export default AsidePanel;
