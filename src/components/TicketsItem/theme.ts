import { styled } from "styled-components";

export const TicketsCard = styled.li`
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding:10px;
  font-size: 20px;
  font-weight: bold;
  color: #606097;
`;

export const TicketRoad = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  // align-items: center;
`;
export const TicketRoadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;