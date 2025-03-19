import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 20px;
`;

export const TabItem = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  background-color: ${({ $active }) => ($active ? "#41a891" : "#9c9696")};
  font-size: 16px;
  border-radius: 5px;
  color: ${({ $active }) => ($active ? "white" : "black")};
  border: none;
  cursor: pointer;
`;