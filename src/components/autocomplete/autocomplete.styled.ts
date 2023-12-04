import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: absolute;
  width: 400px;
  max-height: 250px;
  overflow-y: scroll;
  top: 67px;
  left: 0;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #0085c6;
  box-sizing: border-box;
  padding: 10px;
  z-index: 3;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  width: 100%;
`;

export const StyledItem = styled.li`
  font-size: 20px;
  line-height: 28px;
  font-family: "Roboto";
  font-weight: 700;
  width: 100%;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: rgba(0, 133, 198, 0.2);
  }
`;
