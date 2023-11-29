import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: 40px;
`;

export const StyledSearchWrapper = styled.div`
  width: 50vw;
  height: 62px;
  border-radius: 40px;
  border: 1px solid #000;
  backgound: #d9d9d9;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-start;
  gap: 30px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 80%;
  font-size: 18px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const StyledSearchButton = styled.button`
  border-radius: 40px;
  background: #4cbb17;
  height: 80%;
  border: none;
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  color: rgba(255, 255, 255, 0.8);
  font-family: "Roboto";
  font-weight: 800;
  font-size: 22px;
  line-height: normal;
  transition: 0.3s all;

  &:hover {
    cursor: pointer;
    background: #53e110;
  }

  &:disabled {
    cursor: default;
    background: #ced5cb;
  }
`;

export const StyledLocationButton = styled.button`
  border-radius: 40px;
  background: #4cbb17;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  height: 62px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  flex-shrink: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  font-style: normal;
  font-family: "Roboto";
  font-weight: 800;
  line-height: normal;
  transition: 0.3s background;

  &:hover {
    cursor: pointer;
    background: #53e110;
  }

  &:disabled {
    cursor: default;
    background: #ced5cb;
  }
`;
