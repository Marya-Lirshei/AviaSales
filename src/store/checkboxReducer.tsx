import {
  CheckboxActionTypes,
  CheckboxId,
  TActionCheckbox,
  TStateCheckbox,
} from "../types";

const initialState: TStateCheckbox = {
  checkbox: {
    [CheckboxId.ALL]: false,
    [CheckboxId.NONE_TRANSFER]: true,
    [CheckboxId.ONE_TRANSFER]: false,
    [CheckboxId.TWO_TRANSFER]: false,
    [CheckboxId.THREE_TRANSFER]: false,
  },
};

export const checkboxReducer = (
  state = initialState,
  action: TActionCheckbox
): TStateCheckbox => {
  switch (action.type) {
    case CheckboxActionTypes.TURN_ON: {
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
