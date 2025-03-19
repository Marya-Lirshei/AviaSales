import "./theme";
import { Wrapper } from "./theme";
import AsidePanel from "../AsidePanel/AsidePanel";
import TicketsList from "../TicketsList/TicketsList";
import { useTicketsPack } from "../Hooks/useTicketsPack";

function App() {
  useTicketsPack();
  return (
    <Wrapper>
      <AsidePanel />
      <TicketsList />
    </Wrapper>
  );
}

export default App;
