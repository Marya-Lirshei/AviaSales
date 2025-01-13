import { Ticket } from "../../types";
import icon from "../../../public/S7 Logo.svg";
const TicketsItem: React.FC<Ticket> = (props) => {
  const {
    price,
    countryOfDispatch,
    countryOfArrival,
    duration,
    departureTime,
    arrivalTime,
  } = props;

  return (
    <li className="tickets-card">
      <div className="ticket-info">
        <span>{price}</span>
        <img src={icon} alt="logo" />
      </div>
      <div className="ticket-road">
        <div>
          <span>{countryOfDispatch} - {countryOfArrival}</span>
          <span>{departureTime} - {arrivalTime}</span>
        </div>
        <div>
          <span>В пути</span>
          <span>{duration}</span>
        </div>
        <div>
          <span>2 персадки</span>
          <span>HKG, JNB</span>
        </div>
      </div>
    </li>
  );
}

export default TicketsItem;
