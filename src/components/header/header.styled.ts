import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: 40px;

  @media (max-width: 376px) {
    flex-flow: column nowrap;
    gap: 10px;
  }
`;

export const StyledSearchWrapper = styled.div`
  width: 100%;
  height: 62px;
  border-radius: 8px;
  border: 1px solid #0085c6;
  background: #fff;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-start;
  gap: 30px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  position: relative;

  @media (max-width: 376px) {
    height: 52px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 60%;
  font-size: 18px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(70, 97, 115, 1);
  }
`;

export const StyledSearchButton = styled.button`
  border-radius: 8px;
  background: #0085c6;
  height: 80%;
  border: none;
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  color: #fff;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 22px;
  line-height: normal;
  transition: 0.3s all;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:disabled {
    cursor: default;
    background: #ced5cb;
  }

  @media (max-width: 376px) {
    display: none;
  }
`;

export const StyledSearchButtonMobile = styled.button`
  border-radius: 8px;
  background: #0085c6;
  height: 52px;
  width: 100%;
  border: none;
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  color: #fff;
  font-family: "Roboto";
  font-weight: 500;
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

  @media (min-width: 376px) {
    display: none;
  }
`;

export const StyledLocationButton = styled.button`
  border-radius: 8px;
  background: #0085c6;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  height: 62px;
  width: 302px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  flex-shrink: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-family: "Roboto";
  font-weight: 500;
  line-height: normal;
  transition: 0.3s background;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:disabled {
    cursor: default;
    background: #ced5cb;
  }

  @media (max-width: 376px) {
    width: 100%;
    height: 52px;
  }
`;
