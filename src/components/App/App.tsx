import "./theme";
import { Wrapper } from "./theme";
import AsidePanel from "../AsidePanel/AsidePanel";
import TicketsList from "../TicketsList/TicketsList";

function App() {
  return (
    <Wrapper>
      <AsidePanel />
      <TicketsList />
    </Wrapper>
  );
}

export default App;
