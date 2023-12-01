import styled from "styled-components";

export const StyledWrapper = styled.div`
  grid-column: 1 / span 8;
  grid-row: 2 / 3;
  width: 100%;
  height: 100%;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
  border-radius: 30px;
  background: #d9d9d9;
  box-sizing: border-box;
  padding: 20px 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 15px;

  @media (min-width: 1921px) {
    padding: 40px 40px;
    gap: 40px;
  }
`;

export const StyledHeading = styled.h2`
  font-family: "Roboto";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 40px;
  }
`;

export const StyledItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;
