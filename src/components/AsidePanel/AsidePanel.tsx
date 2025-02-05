import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { CheckboxActionTypes, CheckboxId } from "../../types";
import {
  AsidePanelContainer,
  CheckboxContainer,
  CheckboxLabel,
  Title,
} from "./theme";

const AsidePanel: React.FC = () => {
  const dispatch = useDispatch();
  const checkedCheckbox = useSelector(
    (state: RootState) => state.checkbox.checkbox
  );

  const checkboxes = [
    { id: CheckboxId.ALL, label: "Все", name: "Все" },
    {
      id: CheckboxId.NONE_TRANSFER,
      label: "Без пересадок",
      name: "Без пересадок",
    },
    { id: CheckboxId.ONE_TRANSFER, label: "1 пересадка", name: "1 пересадка" },
    { id: CheckboxId.TWO_TRANSFER, label: "2 пересадки", name: "2 пересадки" },
    {
      id: CheckboxId.THREE_TRANSFER,
      label: "3 пересадки",
      name: "3 пересадки",
    },
  ];

  const handleCheckboxChange = (id: CheckboxId) => {
    const updatedCheckboxes = { ...checkedCheckbox };
    updatedCheckboxes[id] = !updatedCheckboxes[id];

    if (id === CheckboxId.ALL) {
      if (updatedCheckboxes[id]) {
        Object.keys(updatedCheckboxes).forEach((key) => {
          updatedCheckboxes[key as CheckboxId] = true;
        });
      } else {
        Object.keys(updatedCheckboxes).forEach((key) => {
          updatedCheckboxes[key as CheckboxId] = false;
        });
      }
    } else {
      if (checkedCheckbox[CheckboxId.ALL] && !updatedCheckboxes[id]) {
        updatedCheckboxes[CheckboxId.ALL] = false;
      }
    }

    const isAllChecked = Object.keys(updatedCheckboxes)
      .filter((key) => key !== CheckboxId.ALL)
      .every((key) => updatedCheckboxes[key as CheckboxId]);

    if (isAllChecked) {
      updatedCheckboxes[CheckboxId.ALL] = true;
    }

    dispatch({ type: CheckboxActionTypes.TURN_ON, payload: updatedCheckboxes });
  };

  return (
    <AsidePanelContainer>
      <Title>КОЛИЧЕСТВО ПЕРЕСАДОК</Title>
      {checkboxes.map((checkbox) => {
        const { id, label, name } = checkbox;
        return (
          <CheckboxContainer key={id}>
            <CheckboxLabel>
              <input
                type="checkbox"
                id={id}
                name={name}
                checked={checkedCheckbox[id] || false}
                onChange={() => handleCheckboxChange(id)}
              />
              <label htmlFor={id}>{label}</label>
            </CheckboxLabel>
          </CheckboxContainer>
        );
      })}
    </AsidePanelContainer>
  );
};

export default AsidePanel;
