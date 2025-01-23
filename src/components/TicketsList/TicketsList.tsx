import { styled } from "styled-components";
import TicketsItem from "../TicketsItem/TicketsItem";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId } from "../asyncAction/AsyncSearchId";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { getTicketsPack } from "../asyncAction/AsyncTicketsPack";
import { TypeTicket } from "../../types";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 0px;
  margin: 0;
  background-color: #d7d3de; //#a57f7f
`;

const TicketsList: React.FC = () => {

  const dispatch = useDispatch()
  const searchId = useSelector((state: RootState)=> state.searchId.searchId)
  console.log('searchId: ', searchId);
  const ticketsPack= useSelector((state: RootState)=> state.ticketsPack.ticketsPack)
  console.log('ticketsPack: ', ticketsPack);
  const stop = useSelector((state: RootState)=> state.ticketsPack.stop)
  console.log('stop: ', stop);
  const filters = useSelector((state: RootState) => state.checkboxes);

  useEffect(()=>{
    dispatch(getSearchId())
  },[dispatch])

  useEffect(()=>{
    if(searchId && !stop){
      dispatch(getTicketsPack(searchId))
    }
  }, [searchId, ticketsPack, stop])  

  const filterTickets = (ticketsPack: TypeTicket[]) => {
    return ticketsPack.filter((ticket) => {
      const stopsCount = ticket.segments[0].stops.length; 

      if (filters.all) return true;

      if (filters.noTransfers && stopsCount === 0) return true; 
      if (filters.oneTransfer && stopsCount === 1) return true; 
      if (filters.twoTransfers && stopsCount === 2) return true; 
      if (filters.threeTransfers && stopsCount === 3) return true; 

      return false;
    });
  };
  const filteredTickets = filterTickets(ticketsPack).slice(0, 5);
  
  return (
    <ListWrapper>
      {filteredTickets.map((ticket: TypeTicket, index: number)=>(
        <TicketsItem
        key={index}
        price={ticket.price}
        segments={ticket.segments}
        />
        ))}
    </ListWrapper>
  );
};
export default TicketsList;
