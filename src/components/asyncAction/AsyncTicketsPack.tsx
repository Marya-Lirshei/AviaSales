import { Dispatch } from "redux";

export const GET_TICKETS_PACK = "GET_TICKETS_PACK";
export const SET_TICKETS_STOP = "SET_TICKETS_STOP";

export interface GetTicketsPackAction {
  type: typeof GET_TICKETS_PACK;
  payload: [];
}

export interface SetTicketsStopAction {
  type: typeof SET_TICKETS_STOP;
  payload: boolean;
}

export const getTicketsPack =
  (searchId: string) =>
  async (dispatch: Dispatch /* , getState: () => any */) => {

    // try {
    //   let stop = false;
    //   const response = await fetch(
    //     `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    //   );
    //   if (!response.ok) {
    //     throw new Error("Ошибка при получении билетов");
    //   }
    //   const data = await response.json();
    //   dispatch({
    //     type: GET_TICKETS_PACK,
    //     payload: data.tickets,
    //   });
    //   if (data.stop) {
    //     dispatch({
    //       type: SET_TICKETS_STOP,
    //       payload: true,
    //     });
    //     stop = true;
    //   }
    // } catch (error) {
    //   console.error("Ошибка при загрузке билетов:", error);
    // }

    let stop = false;
    let count = 0;
    while (!stop) {
      try {
        const response = await fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
        );
        if (!response.ok) {
          throw new Error("Ошибка при получении билетов");
        }
        const data = await response.json();
        console.log("data: ", data);
        dispatch({
          type: GET_TICKETS_PACK,
          payload: data.tickets,
        });
        stop = data.stop;
        count = 0;
        dispatch({
          type: SET_TICKETS_STOP,
          payload: true,
        });
        stop = true;
      } catch (error) {
        count++;
        if (count > 3) {
          throw new Error("Дохера попыток")
        }
      }
    }
    
  };
