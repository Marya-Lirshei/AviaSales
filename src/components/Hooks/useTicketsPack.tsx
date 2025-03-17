import { useState, useEffect } from "react";
import { BASE_URL } from "../asyncAction/AsyncSearchId";
import { TTypeTicket } from "../../types";

export const useTicketsPack = () => {
  // const [tickets, setTickets] = useState<TTypeTicket[]>([]);
  // console.log("🐯 ~ useTicketsPack ~ tickets:", tickets)
  // const [stop, setStop] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchId = localStorage.getItem("searchId");
    if (!searchId) return;

    let stop = false;
    let count = 0;

    const fetchTickets = async () => {
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
          // setTickets((prevTickets) => [...prevTickets, ...data.tickets]);
          stop = data.stop;
          count = 0;
          // setStop(true);
        } catch (error) {
          count++;
          if (count > 3) {
            // setError("Превышено количество попыток запроса");
            console.error("Ошибка при получении билетов:", error);
          }
        }
      }
    };

    fetchTickets();
  }, []);

  // return { tickets, stop, error };
};
