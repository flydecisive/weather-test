import { useEffect, useState } from "react";
import {
  StyledWrapper,
  StyledCity,
  StyledTime,
  StyledDate,
  StyledDateWrapper,
} from "./location.styled";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import { useCurrentWeatherContext } from "../../contexts/current-weather";

function Location() {
  const [city, setCity] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const { currentWeather } = useCurrentWeatherContext();

  useEffect(() => {
    if (currentWeather) {
      setCity(currentWeather?.location?.name.split(",")[0]);
      setTime(format(new Date(currentWeather?.data?.time), "HH:mm"));
      setDate(
        format(new Date(currentWeather?.data?.time), "EEEE , d MMMM", {
          locale: ruLocale,
        })
      );
    }
  }, [currentWeather]);

  return (
    <StyledWrapper>
      <StyledCity>{city}</StyledCity>
      <StyledDateWrapper>
        <StyledTime>{time}</StyledTime>
        <StyledDate>{date[0]?.toUpperCase() + date?.substring(1)}</StyledDate>
      </StyledDateWrapper>
    </StyledWrapper>
  );
}

export default Location;
