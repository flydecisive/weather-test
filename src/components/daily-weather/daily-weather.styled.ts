import styled from "styled-components";

export const StyledWrapper = styled.div<{ $selected: boolean }>`
  grid-column: 1 / span 8;
  grid-row: 2 / 3;
  width: 100%;
  height: 100%;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
  border-radius: 8px;
  background: ${(props) =>
    props.$selected
      ? `linear-gradient(to right, #e0eafc, #cfdef3)`
      : "#eff5ff"};
  box-sizing: border-box;
  padding: 20px 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 15px;

  @media (max-width: 376px) {
    padding: 20px 20px;
  }
`;

export const StyledBackIcon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 20px;
  top: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeading = styled.h2`
  font-family: "Roboto";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 376px) {
    font-size: 24px;
  }
`;

export const StyledItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 376px) {
    flex-flow: column nowrap;
  }
`;
