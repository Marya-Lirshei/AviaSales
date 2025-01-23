import {
  CHECKBOX_ALL,
  CHECKBOX_NO_TRANSFERS,
  CHECKBOX_ONE_TRANSFERS,
  CHECKBOX_THREE_TRANSFERS,
  CHECKBOX_TWO_TRANSFERS,
  CheckboxActionTypes,
} from "../asyncAction/AsyncCheckbox";

interface CheckboxState {
  all: boolean;
  noTransfers: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
}

const initialState: CheckboxState = {
  all: false,
  noTransfers: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
};

export const checkboxReducer = (
  state = initialState,
  action: CheckboxActionTypes
): CheckboxState => {
  switch (action.type) {
    case CHECKBOX_ALL:
      return {
        ...state,
        all: action.payload,
        noTransfers: action.payload,
        oneTransfer: action.payload,
        twoTransfers: action.payload,
        threeTransfers: action.payload,
      };

    case CHECKBOX_NO_TRANSFERS:
    case CHECKBOX_ONE_TRANSFERS:
    case CHECKBOX_TWO_TRANSFERS:
    case CHECKBOX_THREE_TRANSFERS:
      const newState = {
        ...state,
        [action.type === CHECKBOX_NO_TRANSFERS
          ? "noTransfers"
          : action.type === CHECKBOX_ONE_TRANSFERS
          ? "oneTransfer"
          : action.type === CHECKBOX_TWO_TRANSFERS
          ? "twoTransfers"
          : "threeTransfers"]: action.payload,
      };

      // Если все чекбоксы включены, включаем "Все"
      if (
        newState.noTransfers &&
        newState.oneTransfer &&
        newState.twoTransfers &&
        newState.threeTransfers
      ) {
        newState.all = true;
      } else {
        newState.all = false;
      }

      return newState;

    default:
      return state;
  }
};
