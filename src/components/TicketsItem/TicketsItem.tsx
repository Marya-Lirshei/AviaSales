import icon from "../../../public/S7 Logo.svg";
import { TicketsItemProps } from "../../types";
import { convertDate, formatDuration } from "../../utils/utils";
import { Header, TicketRoad, TicketRoadWrapper, TicketsCard } from "./theme";

const TicketsItem: React.FC<TicketsItemProps> = ({ price, segments }) => {
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
