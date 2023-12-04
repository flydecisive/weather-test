import styled from "styled-components";

export const StyledItem = styled.div<{ id: number }>`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: 8px;
  background: linear-gradient(to right, #e0eafc, #cfdef3);
  filter: drop-shadow(10px 10px 4px rgba(205, 202, 219, 0.8));

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1441px) {
    padding: 10px 10px;
  }

  @media (max-width: 376px) {
    gap: 8px;
    width: 100%;
    padding: 30px 30px;
  }
`;

export const StyledItemElem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledElemIcon = styled.div`
  width: 28px;
  height: 28px;
`;

export const StyledItemDate = styled.h3`
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyledItemText = styled.p`
  font-family: "Roboto";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export const StyledItemInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 15px;
  column-gap: 5px;
`;

export const StyledStatusIcon = styled.img`
  width: 80px;
  height: 80px;
`;
