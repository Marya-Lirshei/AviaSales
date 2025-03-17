import TicketsItem from "../TicketsItem/TicketsItem";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId } from "../asyncAction/AsyncSearchId";
import { useEffect, useState, useMemo } from "react";
import { RootState } from "../../store/store";
import { TTypeTicket } from "../../types";
import Tabs from "../Tabs/Tabs";
import { useTicketsPack } from "../Hooks/useTicketsPack";
import { ListWrapper, ShowMoreButton, WrapperUl, Notification } from "./theme";
import { isTicketMatchesFilters, sortTickets } from "../../utils/ticketUtils";

const TicketsList: React.FC = () => {
  // const { tickets, error } = useTicketsPack();

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.checkbox.checkbox);
  const tabName = useSelector((state: RootState) => state.tickets.tabName);

  const [visibleTickets, setVisibleTickets] = useState(5);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  // const filteredTickets = useMemo(() => {
  //   return tickets.filter((ticket) => isTicketMatchesFilters(ticket, filters));
  // }, [tickets, filters]);

  // const sortedTickets = useMemo(() => {
  //   return sortTickets(filteredTickets, tabName);
  // }, [filteredTickets, tabName]);

  // const isAnyFilterSelected = Object.values(filters).some((value) => value);

  const handleShowMore = () => {
    setVisibleTickets((prevCount) => prevCount + 5);
  };

  return (
    <WrapperUl>
      <Tabs />
      <ListWrapper>
        {[]
          .slice(0, visibleTickets)
          .map((ticket: TTypeTicket, index: number) => (
            <TicketsItem
              key={index}
              price={ticket.price}
              segments={ticket.segments}
            />
          ))}
      </ListWrapper>
      {/* {isAnyFilterSelected ? ( */}
      {1 ? (
        <ShowMoreButton onClick={handleShowMore}>Показать еще</ShowMoreButton>
      ) : (
        <Notification>Выберите количество пересадок.</Notification>
      )}
    </WrapperUl>
  );
};
export default TicketsList;
