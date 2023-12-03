import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: fit-content;
  padding: 30px 50px;
  position: relative;
  box-sizing: border-box;
  background: #d9d9d9;
  border: 2px solid rgba(70, 97, 115, 1);
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;
  position: absolute;
  margin-inline: auto;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const StyledIcon = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledText = styled.p`
  font-size: 32px;
  font-family: "Roboto";
  line-height: normal;
  font-weight: 800;
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

export const StyledButton = styled.button<{ $accept: boolean; id: number }>`
  width: 100px;
  background: ${(props) => (props.$accept ? "#2c9121" : "#c40b11")};
  color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 20px;
  font-family: "Roboto";
  line-height: normal;
  font-weight: 700;
  border: none;
  transition: 0.3s all;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
