import styled from "styled-components";

export const StyledWrapper = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
  border-radius: 30px;
  background: #d9d9d9;
  padding-top: 50px;
  padding-bottom: 50px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDateWrapper = styled.div`
  text-align: center;
`;

export const StyledCity = styled.p`
  font-family: "Roboto";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 48px;
  }
`;

export const StyledTime = styled.p`
  font-family: "Roboto";
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 136px;
  }
`;

export const StyledDate = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 32px;
  }
`;
