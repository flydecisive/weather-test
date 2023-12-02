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

  @media (max-width: 376px) {
    flex-flow: column nowrap;
    gap: 20px;
    align-items: center;
  }
`;

export const StyledTemperature = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  width: fit-content;
`;

export const StyledCurrentTemp = styled.p`
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
`;

export const StyledFeel = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  align-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const StyledFeelTemp = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: fit-content;

  @media (max-width: 376px) {
    gap: 8px;
  }
`;

export const StyledElemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledStatusIcon = styled.img`
  width: 270px;
  height: 270px;
`;

export const StyledElemsLeftContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const StyledLeftIcon = styled.div`
  width: 48px;
  height: 48px;
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
`;

export const StyledElemText = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
`;

export const StyledElemsRightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;

  @media (max-width: 376px) {
    row-gap: 10px;
  }
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
`;

export const StyledRightElemInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  align-items: center;
`;
