import {
  GetTicketsPackAction,
  GET_TICKETS_PACK,
  SET_TICKETS_STOP,
  SetTicketsStopAction,
} from "../asyncAction/AsyncTicketsPack";

const initialState: TicketsPackState = {
  ticketsPack: [],
  stop: false,
};

interface TicketsPackState {
  ticketsPack: [];
  stop: boolean;
}

export const ticketsPackReducer = (
  state: TicketsPackState = initialState,
  action: GetTicketsPackAction | SetTicketsStopAction
): TicketsPackState => {
  switch (action.type) {
    case GET_TICKETS_PACK:
      return {
        ...state,
        ticketsPack: [...state.ticketsPack, ...action.payload], 
      };
    case SET_TICKETS_STOP:
      return {
        ...state,
        stop: action.payload,
      };
    default:
      return state;
  }
};

