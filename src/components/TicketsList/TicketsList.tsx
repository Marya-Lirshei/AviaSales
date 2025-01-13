import { Ticket } from "../../types";
import TicketsItem from "../TicketsItem/TicketsItem";



interface TicketsListProps {
    tickets: Ticket[];
  }

  const TicketsList: React.FC<TicketsListProps> = ({tickets}) => {
    return (
        <div>                                                                                  
            <ul>
                {tickets.map((ticket, index)=>(
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
            </ul>
        </div>
    )
}
export default TicketsList                                                           