import icon from "../../../public/S7 Logo.svg";
import { styled } from "styled-components";
import { TypeTicket } from "../../types";
import { convertDate, formatDuration } from "../../utils/utils";

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
`;

const TicketRoad = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  // align-items: center;
`;
const TicketRoadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;
interface TicketsItemProps {
  price: number;
  segments: TypeTicket["segments"];
}

const TicketsItem: React.FC<TicketsItemProps> = ({ price, segments }) => {
  // console.log("segments: ", segments);

  return (
    <TicketsCard>
      <Header>
        <span>{price} Р</span>
        <img src={icon} alt="logo" />
      </Header>
      {segments.map((segment, index) => (
        <TicketRoad key={index}>
          <TicketRoadWrapper>
            <span>
              {segment.origin} - {segment.destination}
            </span>
            <span>{convertDate(segment.date, segment.duration)}</span>
          </TicketRoadWrapper>
          <TicketRoadWrapper>
            <span>В пути</span>
            <span>{formatDuration(segment.duration)}</span>
          </TicketRoadWrapper>
          <TicketRoadWrapper>
            <span>{segment.stops.length} пересадки</span>
            <span>{segment.stops.join(", ")}</span>
          </TicketRoadWrapper>
        </TicketRoad>
      ))}
    </TicketsCard>
  );
};

export default TicketsItem;
