import {
  TActionTab,
  TStateTickets,
  TabsActionTypes,
  TabsTicket,
} from "../types";

const initialState: TStateTickets = {
  tabName: TabsTicket.CHEAPEST,
  allTickets: [],
  visibleTickets:[],
  visibleCount: 5,
  // showMore: [],
  loading: true,
  error: "",
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
    case TabsActionTypes.SET_TICKETS: {
      return {
        ...state,
        allTickets: [...state.allTickets, ...action.payload],
        visibleTickets: [...state.allTickets, ...action.payload].slice(0, state.visibleCount)      };
    }    
    case TabsActionTypes.SET_VISIBLE_COUNT: {
      // const newVisibleCount = state.visibleCount + action.payload;
      return {
        ...state,
        visibleCount: state.visibleCount + action.payload,
        visibleTickets: state.allTickets.slice(0, state.visibleCount + action.payload),
      };
    }
    case TabsActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case TabsActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
