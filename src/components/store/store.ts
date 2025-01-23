import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { searchIdReducer } from './searchIdReducer';
import { ticketsPackReducer } from './ticketsPackReducer';
import { checkboxReducer } from './checkboxReducer';

const rootReducer = combineReducers({
    ticketsPack: ticketsPackReducer,
    searchId: searchIdReducer,
    checkboxes: checkboxReducer,
})

export const store= createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>;