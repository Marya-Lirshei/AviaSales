import TicketsItem from "../TicketsItem/TicketsItem";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId } from "../asyncAction/AsyncSearchId";
import { useEffect, useMemo } from "react";
import { RootState } from "../../store/store";
import { TTypeTicket, TabsActionTypes } from "../../types";
import Tabs from "../Tabs/Tabs";
import { useTicketsPack } from "../Hooks/useTicketsPack";
import { ListWrapper, ShowMoreButton, WrapperUl, Notification } from "./theme";
import { isTicketMatchesFilters, sortTickets } from "../../utils/ticketUtils";

const TicketsList: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.checkbox.checkbox);
  const tabName = useSelector((state: RootState) => state.tickets.tabName);
  const visibleTickets =useSelector((state: RootState)=>state.tickets.visibleTickets)

  const { error } = useTicketsPack();

  if (error) {
    return <div>{error}</div>;
  }

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  const filteredTickets = visibleTickets.filter((ticket) => isTicketMatchesFilters(ticket, filters));


  const sortedTickets = useMemo(() => {
    return sortTickets(filteredTickets, tabName);
  }, [filteredTickets, tabName]);
  
  console.log('sortedTickets: ', sortedTickets);
  const isAnyFilterSelected = Object.values(filters).some((value) => value);

  const handleShowMore = () => {
    dispatch({
      type: TabsActionTypes.SET_VISIBLE_COUNT,
      payload: 5,
    });
  };

  return (
    <WrapperUl>
      <Tabs />
      <ListWrapper>
      {sortedTickets.length > 0 ? (
          sortedTickets.map((ticket: TTypeTicket, index: number) => (
            <TicketsItem
              key={index}
              price={ticket.price}
              segments={ticket.segments}
            />
          ))
        ) : (
          <Notification>По данному фильтру ничего не найдено. Нажмите на кнопку "Показать еще"</Notification>
        )}
      </ListWrapper>
      {isAnyFilterSelected ? (
        <ShowMoreButton onClick={handleShowMore}>Показать еще</ShowMoreButton>
      ) : (
        <Notification>Выберите количество пересадок.</Notification>
      )}
    </WrapperUl>
  );
};
export default TicketsList;
