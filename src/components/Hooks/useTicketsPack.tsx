import { useEffect } from "react";
import { BASE_URL } from "../asyncAction/AsyncSearchId";
import { TabsActionTypes, TStateTickets } from "../../types";
import { useDispatch, useSelector } from "react-redux";

export const useTicketsPack = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: TStateTickets) => state.error);

  useEffect(() => {
    const searchId = localStorage.getItem("searchId");
    if (!searchId) return;

    let stop = false;
    let count = 0;

    const fetchTickets = async () => {
      dispatch({ type: TabsActionTypes.SET_LOADING, payload: true }); 
      while (!stop) {
        try {
          const response = await fetch(
            `${BASE_URL}/tickets?searchId=${searchId}`
          );
          if (!response.ok) {
            throw new Error("Ошибка при получении билетов");
          }
          const data = await response.json();
          console.log("data: ", data);
          dispatch({
            type: TabsActionTypes.SET_TICKETS,
            payload: data.tickets
          })

          stop = data.stop;
          count = 0;
        } catch (err) {
          count++;
          if (count > 3) {
            const error = err as Error
            console.error("Ошибка при получении билетов:", error);
            stop = true; 
            dispatch({
              type: TabsActionTypes.SET_ERROR,
              payload: error.message,
            });
          }
        }
      }
      dispatch({ type: TabsActionTypes.SET_LOADING, payload: false });
    };

    fetchTickets();
  }, [dispatch]);

  return { error };
};
