import { styled } from "styled-components";
import { Ticket } from "../../types";
import TicketsItem from "../TicketsItem/TicketsItem";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId } from "../asyncAction/AsyncSearchId";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { getTicketsPack } from "../asyncAction/AsyncTicketsPack";

interface TicketsListProps {
  tickets: Ticket[];
}

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 0px;
  margin: 0;
  background-color: #d7d3de; //#a57f7f
`;

const TicketsList: React.FC<TicketsListProps> = ({ tickets }) => {

  const dispatch = useDispatch()
  const searchId = useSelector((state: RootState)=> state.searchId.searchId)
  console.log('searchId: ', searchId);
  const ticketsR= useSelector((state: RootState)=> state.ticketsPack.ticketsPack)
  console.log('ticketsR: ', ticketsR);
  const stop = useSelector((state: RootState)=> state.ticketsPack.stop)
  console.log('stop: ', stop);

  useEffect(()=>{
    dispatch(getSearchId())
  },[dispatch])

  useEffect(()=>{
    if(searchId && !stop){
      dispatch(getTicketsPack(searchId))
    }
  }, [searchId, ticketsR, stop])  
  
  return (
    <ListWrapper>
      {tickets.map((ticket, index) => (
        <TicketsItem
          key={index}
          price={ticket.price}
          countryOfDispatch={ticket.countryOfDispatch}
          countryOfArrival={ticket.countryOfArrival}
          duration={ticket.duration}
          departureTime={ticket.departureTime}
          arrivalTime={ticket.arrivalTime}
        />
      ))}
    </ListWrapper>
  );
};
export default TicketsList;
