import { GetSearchIdAction, GET_SEARCH_ID } from "../asyncAction/AsyncSearchId";

interface SearchIdState {
  searchId: string | null;
}

const initialState: SearchIdState = {
  searchId: null,
};

export const searchIdReducer = (
  state: SearchIdState = initialState,
  action: GetSearchIdAction
): SearchIdState => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      };
    default:
      return state;
  }
};
