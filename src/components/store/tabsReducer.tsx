// import { CHEAPEST, FASTEST, OPTIMAL, TabsActionTypes } from "../asyncAction/Tabs";

import { TAction, TState, TabsActionTypes, TabsTicket } from "../../types";

// interface TabsState {
//     sortBy: 'cheapest' | 'fastest' | 'optimal'; 
//     tickets: []; 
//   }

// const initialState= {
//     sortBy: 'cheapest', 
//     tickets: [],
// };

// export const tabsReducer = (
//   state = initialState,
//   action: TabsActionTypes
// ): TabsState => {
//   switch (action.type) {
//     case CHEAPEST:
//       return {
//         ...state,
//         sortBy: 'cheapest',
//         tickets: [...state.tickets].sort((a, b) => a.price - b.price),
//       };
//     case FASTEST:
//       return {
//         ...state,
//         sortBy: 'fastest',
//         tickets: [...state.tickets].sort((a, b) => a.duration - b.duration),
//       };
//     case OPTIMAL:
//         return {
//             ...state,
//             sortBy: 'optimal',
//             tickets: [...state.tickets].sort((a, b) => {
//               return a.price - b.price || a.duration - b.duration;
//             }),
//           };
//     default:
//       return state;
//   }
// };


const initialState: TState = {
  tabName: TabsTicket.CHEAPEST,
}

export const tabsReducer = ( state = initialState, action: TAction): TState =>{
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
}
