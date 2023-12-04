import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 376px) {
    flex-flow: column nowrap;
    gap: 15px;
  }
`;

export const StyledStatusWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 5px;
`;

export const StyledStatusIcon = styled.img`
  width: 220px;
  height: 220px;

  @media (max-width: 376px) {
    width: 150px;
    height: 150px;
  }
`;

export const StyledStatusText = styled.p`
  font-family: "Roboto";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 376px) {
    font-weight: 500;
  }
`;

export const StyledInfo = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10px;

  @media (max-width: 376px) {
    box-sizing: border-box;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    row-gap: 8px;
    column-gap: 5px;
  }
`;

export const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledInfoItemWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const StyledInfoIcon = styled.div`
  width: 45px;
  height: 45px;

  @media (max-width: 376px) {
    width: 25px;
    height: 25px;
  }
`;

export const StyledTimeIcon = styled.div`
  width: 60px;
  height: 60px;

  @media (max-width: 376px) {
    width: 25px;
    height: 25px;
  }
`;

export const StyledInfoHeading = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 376px) {
    font-size: 16px;
  }
`;

export const StyledInfoText = styled.p`
  color: #444343;
  font-family: "Roboto";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 376px) {
    font-size: 14px;
  }
`;
