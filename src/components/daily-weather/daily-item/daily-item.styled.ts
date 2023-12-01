import styled from "styled-components";

export const StyledItem = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: 20px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(205, 202, 219, 1) 100%
  );
  filter: drop-shadow(10px 10px 4px rgba(205, 202, 219, 0.8));

  @media (max-width: 1441px) {
    padding: 10px 10px;
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

// @media (min-width: 1921px) {
//     width: 36px;
//     height: 36px;
//   }

export const StyledItemDate = styled.h3`
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// @media (min-width: 1921px) {
//     font-size: 32px;
//   }

export const StyledItemText = styled.p`
  font-family: "Roboto";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

// @media (min-width: 1921px) {
//     font-size: 24px;
//   }

export const StyledItemInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 15px;
`;

export const StyledStatusIcon = styled.div`
  width: 80px;
  height: 80px;
`;

// column-gap: 20px;

// @media (min-width: 1921px) {
//     width: 120px;
//     height: 120px;
//   }
