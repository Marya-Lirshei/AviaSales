import { useSelector, useDispatch } from "react-redux";
import { checkboxReducer } from "../store/checkboxReducer";
import { toggleCheckbox } from "../store/checkboxReducer";
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
  flex-direction: column;
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

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &:hover {
    color: #000;
  }
`;

const AsidePanel: React.FC = () => {
  const checkboxes = useSelector((state: any)=>state.checkboxes)
  const dispatch = useDispatch()

  const handleCheckboxChange = (name: string) => {
    dispatch(toggleCheckbox(name));
  };



  return (
    <AsidePanelContainer>
      <Title>КОЛИЧЕСТВО ПЕРЕСАДОК</Title>
      <CheckboxContainer>
        <CheckboxLabel>
          <input type="checkbox" 
          checked={checkboxes.option1}
          onChange={() => handleCheckboxChange('option1')}
          />
          Все
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" 
          checked={checkboxes.option2}
          onChange={() => handleCheckboxChange('option2')}
          />
          Без пересадок
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" 
          checked={checkboxes.option3}
          onChange={() => handleCheckboxChange('option3')}
          />1 пересадка
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" 
          checked={checkboxes.option4}
          onChange={() => handleCheckboxChange('option4')}
          />2 пересадка
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" 
          checked={checkboxes.option5}
          onChange={() => handleCheckboxChange('option5')}
          />3 пересадка
        </CheckboxLabel>
      </CheckboxContainer>
    </AsidePanelContainer>
  );
};

export default AsidePanel;
