import styled from "styled-components";

export const StyledWrapper = styled.div`
  grid-column: 4 / span 5;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
  border-radius: 30px;
  background: #d9d9d9;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1920px) {
    padding: 50px;
  }
`;

export const StyledTemperature = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: fit-content;
`;

export const StyledCurrentTemp = styled.span`
  font-family: "Roboto";
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  background: -webkit-linear-gradient(
    0deg,
    rgba(31, 30, 30, 1) 0%,
    rgba(194, 194, 195, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 1921px) {
    font-size: 108px;
  }
`;

export const StyledFeel = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1921px) {
    font-size: 20px;
  }
`;

export const StyledFeelTemp = styled.span`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;

  @media (min-width: 1921px) {
    font-size: 36px;
  }
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

export const StyledElemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledStatusIcon = styled.div`
  width: 270px;
  height: 270px;

  @media (max-width: 1441) {
    width: 240px;
    height: 240px;
  }

  @media (min-width: 1921px) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledElemsLeftContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const StyledLeftIcon = styled.div`
  width: 48px;
  height: 48px;

  @media (min-width: 1921px) {
    width: 78px;
    height: 78px;
  }
`;

export const StyledLeftElemInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const StyledElemHeading = styled.h4`
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 32px;
  }
`;

export const StyledElemText = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 24px;
  }
`;

export const StyledCenterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledWeather = styled.p`
  font-family: "Roboto";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 1921px) {
    font-size: 48px;
  }
`;

export const StyledElemsRightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
`;

export const StyledRightElem = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 20px;
`;

export const StyledRightElemBottom = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const StyledRightIcon = styled.div`
  width: 58px;
  height: 58px;

  @media (min-width: 1921px) {
    width: 88px;
    height: 88px;
  }
`;

export const StyledRightElemInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  align-items: center;
`;