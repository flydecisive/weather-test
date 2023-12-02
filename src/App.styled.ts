import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 30px;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 40px;

  @media (max-width: 376px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
  }
`;
