import {
  TActionTab,
  TStateTickets,
  TabsActionTypes,
  TabsTicket,
} from "../types";

const initialState: TStateTickets = {
  tabName: TabsTicket.CHEAPEST,
  allTickets: [],
  visibleTickets: 5,
  loading: true,
  error: false,
};

export const ticketsReducer = (
  state = initialState,
  action: TActionTab
): TStateTickets => {
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
