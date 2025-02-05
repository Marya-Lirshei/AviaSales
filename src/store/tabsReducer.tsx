import { TActionTab, TStateTab, TabsActionTypes, TabsTicket } from "../types";

const initialState: TStateTab = {
  tabName: TabsTicket.CHEAPEST,
};

export const tabsReducer = (
  state = initialState,
  action: TActionTab
): TStateTab => {
  switch (action.type) {
    case TabsActionTypes.SET_TABS: {
      return {
        ...state,
        tabName: action.payload,
      };
    }
    default:
      return state;
  }
};
