/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInput = (e: any) => {
    e.target.value = e.target.value.replace(/[^a-z,A-Z,а-я,А-Я]/, "");
    setSearchValue(e.target.value);
  };

  const handleSearchButton = () => {
    console.log(searchValue);
  };

  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <SearchIcon />
        <StyledInput
          type="text"
          defaultValue={""}
          placeholder="Введите ваш город"
          onChange={handleInput}
        />
        <StyledSearchButton
          disabled={searchValue.length === 0 ? true : false}
          onClick={handleSearchButton}
        >
          Найти
        </StyledSearchButton>
      </StyledSearchWrapper>
      <StyledLocationButton>
        <CurrentLocationIcon />
        Определить город
      </StyledLocationButton>
    </StyledWrapper>
  );
}

export default Header;
