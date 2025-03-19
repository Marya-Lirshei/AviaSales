import {
  CheckboxActionTypes,
  CheckboxId,
  TActionCheckbox,
  TStateCheckbox,
} from "../types";

const initialState: TStateCheckbox = {
  checkbox: {
    [CheckboxId.ALL]: true,
    [CheckboxId.NONE_TRANSFER]: true,
    [CheckboxId.ONE_TRANSFER]: true,
    [CheckboxId.TWO_TRANSFER]: true,
    [CheckboxId.THREE_TRANSFER]: true,
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
