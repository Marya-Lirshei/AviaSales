import { styled } from "styled-components";
import TicketsItem from "../TicketsItem/TicketsItem";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId } from "../asyncAction/AsyncSearchId";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { getTicketsPack } from "../asyncAction/AsyncTicketsPack";
import { TabsTicket, TypeTicket } from "../../types";
import Tabs from "../../Tabs";

const WrapperUl = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 0px;
  margin: 0;
  background-color: #d7d3de; //#a57f7f
`;

const ShowMoreButton = styled.button`
  padding: 10px 20px;
  background-color: #41a891; /* Основной цвет кнопки */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px auto; /* Центрирование по горизонтали и отступ сверху */
  display: block; /* Чтобы margin: auto работал */
  transition: background-color 0.3s ease; /* Плавное изменение цвета */

  &:hover {
    background-color: #45a049; /* Цвет при наведении */
  }

  &:active {
    background-color: #3d8b40; /* Цвет при нажатии */
  }
`;

const TicketsList: React.FC = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state: RootState) => state.searchId.searchId);
  console.log("searchId: ", searchId);
  const ticketsPack = useSelector(
    (state: RootState) => state.ticketsPack.ticketsPack
  );
  console.log("ticketsPack: ", ticketsPack);
  const stop = useSelector((state: RootState) => state.ticketsPack.stop);
  console.log("stop: ", stop);
  const filters = useSelector((state: RootState) => state.checkboxes);
  console.log("filters: ", filters);
  const tabName = useSelector((state: RootState) => state.tabs.tabName);
  console.log('tabName: ', tabName);

  const [visibleTickets, setVisibleTickets] = useState(5);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchId && !stop) {
      dispatch(getTicketsPack(searchId));
    }
  }, [searchId, ticketsPack, stop]);

  const filterTickets = (ticketsPack: TypeTicket[]) => {
    return ticketsPack.filter((ticket) => {
      const stopsCount = ticket.segments[0].stops.length;

      if (filters.all) return true;

      if (filters.noTransfers && stopsCount === 0) return true;
      // console.log('filters.noTransfers: ', filters.noTransfers);
      if (filters.oneTransfer && stopsCount === 1) return true;
      if (filters.twoTransfers && stopsCount === 2) return true;
      if (filters.threeTransfers && stopsCount === 3) return true;

      return false;
    });
  };

  const sortTickets = (tickets: TypeTicket[], tabName: TabsTicket) => {
    switch (tabName) {
      case TabsTicket.CHEAPEST:
        return [...tickets].sort((a, b) => a.price - b.price);

      case TabsTicket.FASTEST:
        return [...tickets].sort(
          (a, b) =>
          a.segments[0].duration - b.segments[0].duration)
          
          
          default:
            return tickets; 
          }
        }; 
  const filteredTickets = filterTickets(ticketsPack);

  const sortedTickets = sortTickets(filteredTickets, tabName).slice(
    0,
    visibleTickets
  );

  const handleShowMore = () => {
    setVisibleTickets((prevCount) => prevCount + 5);
  };

  return (
    <WrapperUl>
      <Tabs />
      <ListWrapper>
        {sortedTickets.map((ticket: TypeTicket, index: number) => (
          <TicketsItem
            key={index}
            price={ticket.price}
            segments={ticket.segments}
          />
        ))}
      </ListWrapper>
      <ShowMoreButton onClick={handleShowMore}>Показать еще</ShowMoreButton>
    </WrapperUl>
  );
};
export default TicketsList;


