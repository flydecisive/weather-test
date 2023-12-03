/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
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
import { getCurrentWeather, getDailyWeather } from "../../weather-api";
import { useCurrentWeatherContext } from "../../contexts/current-weather";
import { useDailyWeatherContext } from "../../contexts/daily-weather";

interface HeaderProps {
  setIsLoaded: (params: boolean) => void;
  setInfo: (params: string) => void;
  setIsLoading: (params: boolean) => void;
  setIsAcceptModalOpen: (params: boolean) => void;
  setCity: (params: string) => void;
  acceptModalButtonId: string;
  setAcceptModalButtonId: (params: string) => void;
}

function Header({
  setIsLoaded,
  setInfo,
  setIsLoading,
  setIsAcceptModalOpen,
  setCity,
  acceptModalButtonId,
  setAcceptModalButtonId,
}: HeaderProps) {
  const [isUserLocationLoading, setIsUserLocationLoading] =
    useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(
    sessionStorage.getItem("city") || ""
  );
  const [isWeatherLoading, setIsWeatherLoading] = useState<boolean>(false);
  const { setCurrentWeather } = useCurrentWeatherContext();
  const { setDailyWeather } = useDailyWeatherContext();
  const ref = useRef(null);

  const handleInput = (e: any) => {
    e.target.value = e.target.value.replace(/[^a-z,A-Z,а-я,А-Я]/, "");
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (acceptModalButtonId === "0") {
      setIsAcceptModalOpen(false);
      handleSearchButton();
      setAcceptModalButtonId("");
    } else {
      setIsAcceptModalOpen(false);
      // @ts-ignore
      ref.current.focus();
      setAcceptModalButtonId("");
    }
  }, [acceptModalButtonId]);

  const handleSearchButton = () => {
    setIsLoading(true);
    setIsWeatherLoading(true);
    sessionStorage.setItem("city", searchValue);
    getCurrentWeather(searchValue)
      .then((responseData) => {
        setCurrentWeather(responseData);
      })
      .catch((err) => {
        if (err.message === "Response limits") {
          setInfo(
            "Превышено максимальное количество запросов. Попробуйте позже."
          );
        } else if (err.message === "Bad request") {
          setInfo(`Город ${searchValue} не найден`);
        }
      })
      .finally(() => {
        setIsLoaded(true);
        setIsWeatherLoading(false);
        setIsLoading(false);
      });

    getDailyWeather(searchValue)
      .then((responseData) => {
        const dailyData = responseData?.timelines?.daily.splice(1);
        setDailyWeather(dailyData);
      })
      .catch((err) => {
        if (err.message === "Response limits") {
          console.log(
            "Превышено максимальное количество запросов. Попробуйте позже."
          );
        } else if (err.message === "Bad request") {
          console.log(`Город ${searchValue} не найден`);
        }
      });
  };

  const successHandler = (position: any) => {
    setIsUserLocationLoading(true);
    getUserGeo(position?.coords.latitude, position?.coords.longitude)
      .then((responseData: any) => {
        setIsAcceptModalOpen(true);
        setSearchValue(responseData?.results[0].components.city);
        setCity(responseData?.results[0].components.city);
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
          ref={ref}
          onChange={handleInput}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              handleSearchButton();
            }
          }}
        />
        <StyledSearchButton
          disabled={
            searchValue.length === 0 ||
            isWeatherLoading ||
            isUserLocationLoading
              ? true
              : false
          }
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
