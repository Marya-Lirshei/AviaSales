import { Dispatch } from "redux";

export const GET_SEARCH_ID = "GET_SEARCH_ID";

export interface GetSearchIdAction {
  type: typeof GET_SEARCH_ID;
  payload: string;
}
export const getSearchId = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(
      "https://aviasales-test-api.kata.academy/search"
    );
    if (!response.ok) {
      throw new Error("Ошибка при получении searchId");
    }
    const data = await response.json();
    // console.log("data: ", data); 
    dispatch({
      type: GET_SEARCH_ID,
      payload: data.searchId
    })
  } catch (error) {
    console.error("Ошибка при получении searchId:", error);
  }
};
