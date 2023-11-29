import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledInput,
  StyledLocationButton,
  StyledSearchButton,
} from "./header.styled";
import SearchIcon from "../../assets/img/search.svg?react";
import CurrentLocationIcon from "../../assets/img/current_location.svg?react";

function Header() {
  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <SearchIcon />
        <StyledInput placeholder="Введите ваш город" />
        <StyledSearchButton>Найти</StyledSearchButton>
      </StyledSearchWrapper>
      <StyledLocationButton>
        <CurrentLocationIcon />
        Определить город
      </StyledLocationButton>
    </StyledWrapper>
  );
}

export default Header;
