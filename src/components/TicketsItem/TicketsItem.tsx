import React from "react";
import icon from "../../../public/S7 Logo.svg";
import { ITicketsItemProps } from "../../types";
import { convertDate, formatDuration } from "../../utils/utils";
import { Header, TicketRoad, TicketRoadWrapper, TicketsCard } from "./theme";

const TicketsItem: React.FC<ITicketsItemProps> = ({ price, segments }) => {
  return (
    <TicketsCard>
      <Header>
        <span>{price} Р</span>
        <img src={icon} alt="logo" />
      </Header>
      {segments.map(({ origin, destination, date, duration, stops }, index) => (
        <TicketRoad key={index}>
          <TicketRoadWrapper>
            <span>
              {origin} - {destination}
            </span>
            <span>{convertDate(date, duration)}</span>
          </TicketRoadWrapper>
          <TicketRoadWrapper>
            <span>В пути</span>
            <span>{formatDuration(duration)}</span>
          </TicketRoadWrapper>
          <TicketRoadWrapper>
            <span>{stops.length} пересадки</span>
            <span>{stops.join(", ")}</span>
          </TicketRoadWrapper>
        </TicketRoad>
      ))}
    </TicketsCard>
  );
};

export default React.memo(TicketsItem);
