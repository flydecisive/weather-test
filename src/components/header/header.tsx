/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledInput,
  StyledLocationButton,
  StyledSearchButton,
  StyledSearchButtonMobile,
} from "./header.styled";
import SearchIcon from "../../assets/img/search.svg?react";
import CurrentLocationIcon from "../../assets/img/current_location.svg?react";
import getUserGeo from "../../geo-api";
import { getCurrentWeather } from "../../weather-api";

function Header() {
  const [isUserLocationLoading, setIsUserLocationLoading] =
    useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isWeatherLoading, setIsWeatherLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  const handleInput = (e: any) => {
    e.target.value = e.target.value.replace(/[^a-z,A-Z,а-я,А-Я]/, "");
    setSearchValue(e.target.value);
  };

  // http://openweathermap.org/img/w/${apiData.weather[0].icon}.png
  const handleSearchButton = () => {
    setIsWeatherLoading(true);
    getCurrentWeather(searchValue)
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((err) => {
        if (err.message === "Response limits") {
          alert(
            "Превышено максимальное количество запросов. Попробуйте позже."
          );
        }
      })
      .finally(() => {
        setIsWeatherLoading(false);
      });

    // getDailyWeather(searchValue).then((responseData) => {
    //   console.log("daily", responseData);
    // });
  };

  const successHandler = (position: any) => {
    setIsUserLocationLoading(true);
    console.log(position?.coords);
    getUserGeo(position?.coords.latitude, position?.coords.longitude)
      .then((responseData: any) => {
        console.log(responseData.timestamp);
        setSearchValue(responseData?.results[0].components.city);
        console.log(responseData);
      })
      .finally(() => {
        setIsUserLocationLoading(false);
      });
  };

  const errorHandler = (error: any) => {
    console.error(error.message);
    alert(
      "Не получается определить вашу геолокацию.\nВключите разрешение определения местоположения в настройках браузера."
    );
  };

  const handleLocationButton = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      alert("Ваш браузер не дружит с геолокацией...");
    }
  };

  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <SearchIcon />
        <StyledInput
          type="text"
          value={searchValue}
          placeholder="Введите ваш город"
          onChange={handleInput}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              handleSearchButton();
            }
          }}
        />
        <StyledSearchButton
          disabled={searchValue.length === 0 || isWeatherLoading ? true : false}
          onClick={handleSearchButton}
        >
          Найти
        </StyledSearchButton>
      </StyledSearchWrapper>
      <StyledSearchButtonMobile
        disabled={searchValue.length === 0 || isWeatherLoading ? true : false}
        onClick={handleSearchButton}
      >
        Найти
      </StyledSearchButtonMobile>
      <StyledLocationButton
        onClick={handleLocationButton}
        disabled={isUserLocationLoading || isWeatherLoading}
      >
        <CurrentLocationIcon />
        {isUserLocationLoading ? "Загрузка..." : "Определить город"}
      </StyledLocationButton>
    </StyledWrapper>
  );
}

export default Header;
