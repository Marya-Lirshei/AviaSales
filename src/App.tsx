// import { useState } from 'react'
import styled from "styled-components";
import "./App.css";
import AsidePanel from "./components/AsidePanel/AsidePanel";
import TicketsList from "./components/TicketsList/TicketsList";
// import { useEffect, useState } from "react";

const Wrapper = styled.div`
  // margin: 0, auto;
  max-width: 1200px;
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #d7d3de;
  // align-items: center;
  // min-height: 100vh; 
`

function App() {
  return (
  <Wrapper>
    <AsidePanel />
    <TicketsList/>
  </Wrapper>
  )
}

export default App;
