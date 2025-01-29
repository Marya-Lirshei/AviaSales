import { useSelector, useDispatch } from "react-redux";
// import { checkboxReducer } from "../store/checkboxReducer";
// import { toggleCheckbox } from "../store/checkboxReducer";
import styled from "styled-components";
import { RootState } from "../store/store";
import {
  toggleCheckboxAll,
  toggleCheckboxNoTransfers,
  toggleCheckboxOneTransfer,
  toggleCheckboxThreeTransfers,
  toggleCheckboxTwoTransfers,
} from "../asyncAction/AsyncCheckbox";

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
  const dispatch = useDispatch();
  const checkboxes = useSelector((state: RootState) => state.checkboxes);
  console.log('checkboxes: ', checkboxes);

  return (
    <AsidePanelContainer>
      <Title>КОЛИЧЕСТВО ПЕРЕСАДОК</Title>
      <CheckboxContainer>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={checkboxes.all}
            onChange={(e) => dispatch(toggleCheckboxAll(e.target.checked))}
          />
          Все
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={checkboxes.noTransfers}
            onChange={(e) =>
              dispatch(toggleCheckboxNoTransfers(e.target.checked))
            }
          />
          Без пересадок
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={checkboxes.oneTransfer}
            onChange={(e) =>
              dispatch(toggleCheckboxOneTransfer(e.target.checked))
            }
          />
          1 пересадка
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={checkboxes.twoTransfers}
            onChange={(e) =>
              dispatch(toggleCheckboxTwoTransfers(e.target.checked))
            }
          />
          2 пересадки
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={checkboxes.threeTransfers}
            onChange={(e) =>
              dispatch(toggleCheckboxThreeTransfers(e.target.checked))
            }
          />
          3 пересадки
        </CheckboxLabel>
      </CheckboxContainer>
    </AsidePanelContainer>
  );
};

export default AsidePanel;
