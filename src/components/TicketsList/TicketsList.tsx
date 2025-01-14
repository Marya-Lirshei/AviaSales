import { styled } from "styled-components";
import { Ticket } from "../../types";
import TicketsItem from "../TicketsItem/TicketsItem";

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
