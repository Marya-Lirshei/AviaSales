import { Ticket } from "../../types";
import icon from "../../../public/S7 Logo.svg";
import { styled } from "styled-components";

const TicketsCard = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none; /* Убираем маркеры */
  // padding-left: 0;
  // width: 460px;
  // height: 150px;
  background-color: #ebebeb; //#c28a8a;
  box-shadow: 0 7px 7px rgba(9, 5, 6, 0.1);
  border-radius: 5px;
  gap: 10px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding:10px;
  font-size: 20px;
  font-weight: bold;
  color: #606097;
  `

  const TicketRoad = styled.div`
  display: flex;
  justify-content: space-between;

  // align-items: center;
  `
  const TicketRoadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  `


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
    <TicketsCard>
      <Header>
        <span>{price} Р</span>
        <img src={icon} alt="logo" />
      </Header>
      <TicketRoad>
        <TicketRoadWrapper>
          <span>
            {countryOfDispatch} - {countryOfArrival}
          </span>
          <span>
            {departureTime} - {arrivalTime}
          </span>
        </TicketRoadWrapper>
        <TicketRoadWrapper>
          <span>В пути</span>
          <span>{duration}</span>
        </TicketRoadWrapper>
        <TicketRoadWrapper>
          <span>2 персадки</span>
          <span>HKG, JNB</span>
        </TicketRoadWrapper>
      </TicketRoad>
    </TicketsCard>
  );
};

export default TicketsItem;
