import styled from "styled-components";
import { TabsActionTypes, TabsTicket } from "./types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "./components/store/store";


export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
//   background-color: blue;
  height: 60px;
  margin-bottom: 20px;
`;

export const TabItem = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  background-color: ${({ $active }) => ($active ? '#41a891' : '#9c9696')};
  font-size: 16px;
  border-radius: 5px;
  color: ${({ $active }) => ($active ? 'white' : 'black')};
  border: none;
  cursor: pointer;

  // &:hover {
  //   background-color: #45a049; /* Цвет при наведении */
  // }

  // &:active {
  //   background-color: #3d8b40; /* Цвет при нажатии */
  // }
`;
const Tabs: React.FC = () => {
  const dispatch = useDispatch()
  const tabName= useSelector((state: RootState) => state.tabs.tabName)


  const tabs = [
      { id: TabsTicket.CHEAPEST, name: 'Самый дешевый' },
      { id: TabsTicket.FASTEST, name: 'Самый быстрый' },
      { id: TabsTicket.OPTIMAL, name: 'Оптимальный' },
  ]

  const handleClick = (id: TabsTicket) => {
    dispatch({ type: TabsActionTypes.SET_TABS, payload: id });
  };
  

  return (
    <TabsWrapper>
      {tabs.map((tab)=>(
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
