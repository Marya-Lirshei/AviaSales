
export const CHECKBOX_ALL = "CHECKBOX_ALL";
export const CHECKBOX_NO_TRANSFERS = "CHECKBOX_NO_TRANSFERS";
export const CHECKBOX_ONE_TRANSFERS = "CHECKBOX_ONE_TRANSFERS";
export const CHECKBOX_TWO_TRANSFERS = "CHECKBOX_TWO_TRANSFERS";
export const CHECKBOX_THREE_TRANSFERS = "CHECKBOX_THREE_TRANSFERS";

export interface CheckboxAllAction {
  type: typeof CHECKBOX_ALL;
  payload: boolean;
}
export interface CheckboxNoAction {
    type: typeof CHECKBOX_NO_TRANSFERS;
  payload: boolean;
}
export interface CheckboxOneAction {
    type: typeof CHECKBOX_ONE_TRANSFERS;
    payload: boolean;
}
export interface CheckboxTwoAction {
    type: typeof CHECKBOX_TWO_TRANSFERS;
    payload: boolean;
}
export interface CheckboxThreeAction {
    type: typeof CHECKBOX_THREE_TRANSFERS;
    payload: boolean;
}

export type CheckboxActionTypes =
  | CheckboxAllAction
  | CheckboxNoAction
  | CheckboxOneAction
  | CheckboxTwoAction
  | CheckboxThreeAction;

export const toggleCheckboxAll = (isChecked: boolean): CheckboxAllAction => ({
  type: CHECKBOX_ALL,
  payload: isChecked,
});

export const toggleCheckboxNoTransfers = (isChecked: boolean): CheckboxNoAction => ({
  type: CHECKBOX_NO_TRANSFERS,
  payload: isChecked,
});

export const toggleCheckboxOneTransfer = (isChecked: boolean): CheckboxOneAction => ({
  type: CHECKBOX_ONE_TRANSFERS,
  payload: isChecked,
});

export const toggleCheckboxTwoTransfers = (isChecked: boolean): CheckboxTwoAction => ({
  type: CHECKBOX_TWO_TRANSFERS,
  payload: isChecked,
});

export const toggleCheckboxThreeTransfers = (isChecked: boolean): CheckboxThreeAction => ({
  type: CHECKBOX_THREE_TRANSFERS,
  payload: isChecked,
});