import { styled } from "styled-components";

export const WrapperUl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 0px;
  margin: 0;
  background-color: #d7d3de; //#a57f7f
`;

export const ShowMoreButton = styled.button`
  padding: 10px 20px;
  background-color: #41a891;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px auto;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3d8b40;
  }
`;

export const Notification = styled.div`
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin: 20px auto;
  text-align: center;
`;