// import { useState } from 'react'
import styled from "styled-components";
import "./App.css";
import AsidePanel from "./components/AsidePanel/AsidePanel";
import TicketsList from "./components/TicketsList/TicketsList";

const Wrapper = styled.div`
  // margin: 0, auto;
  max-width: 1200px;
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #d7d3de;
  // align-items: center; /* Центрирование по вертикали */
  // min-height: 100vh; /* Высота контейнера на весь экран */

  // @media (max-width: 768px) {
  //   flex-direction: column; /* Меняем направление на вертикальное */
  //   align-items: center; /* Центрируем дочерние элементы */
  // }
`

function App() {
  const tickets = [
    {
      price: 12000, // цена в рублях
      duration: "3ч 30м", // время в пути
      countryOfDispatch: "MOW",//страна отправления
      countryOfArrival: "HKT",//стртана прибытия
      departureTime: "08:45", // время отправления
      arrivalTime: "12:15", // время прилета
      hasTransfers: false, // есть ли пересадки
    },
    {
      price: 9500,
      duration: "5ч 10м",
      countryOfDispatch: "MOW",//страна отправления
      countryOfArrival: "HKT",//стртана прибытия
      departureTime: "14:20",
      arrivalTime: "19:30",
      hasTransfers: true,
    },
  ];

  return (
  <Wrapper>
    <AsidePanel />
    <TicketsList tickets={tickets}/>
  </Wrapper>
  )
}

export default App;
