import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { checkboxReducer } from './checkboxReducer';
import { ticketsReducer } from "./ticketsReducer";

const rootReducer = combineReducers({
    checkbox: checkboxReducer,
    tickets: ticketsReducer,
})

export const store= createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>;