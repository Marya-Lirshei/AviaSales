import { TabsActionTypes, TabsTicket } from "../../types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TabItem, TabsWrapper } from "./theme";

const Tabs: React.FC = () => {
  const dispatch = useDispatch();
  const tabName = useSelector((state: RootState) => state.tickets.tabName);
  // const tabName = TabsTicket.CHEAPEST;

  const tabs = [
    { id: TabsTicket.CHEAPEST, name: "Самый дешевый" },
    { id: TabsTicket.FASTEST, name: "Самый быстрый" },
  ];

  const handleClick = (id: TabsTicket) => {
    dispatch({ type: TabsActionTypes.SET_TABS, payload: id });
  };

  return (
    <TabsWrapper>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          $active={tabName === tab.id}
          onClick={() => handleClick(tab.id)}
        >
          {tab.name}
        </TabItem>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
