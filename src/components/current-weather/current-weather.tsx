import {
  StyledWrapper,
  StyledTemperature,
  StyledFeel,
  StyledFeelTemp,
  StyledCurrentTemp,
  StyledElemLeft,
  StyledLeftContainer,
  StyledLeftIcon,
  StyledElemHeading,
  StyledElemText,
  StyledLeftElemInfo,
  StyledCenterContainer,
  StyledWeather,
  StyledElemsLeftContainer,
  StyledElemsRightContainer,
  StyledRightElem,
  StyledRightIcon,
  StyledRightElemInfo,
  StyledStatusIcon,
  StyledRightElemBottom,
} from "./current-weather.styled";
import DewIcon from "../../assets/img/dew.svg?react";
import VisibilityIcon from "../../assets/img/visibility.svg?react";
import HumidityIcon from "../../assets/img/humidity.svg?react";
import WindIcon from "../../assets/img/wind.svg?react";
import PressureIcon from "../../assets/img/pressure.svg?react";
import UvIcon from "../../assets/img/uv-index.svg?react";
import { useCurrentWeatherContext } from "../../contexts/current-weather";
import { iconsData } from "../../icons-data";

function CurrentWeather() {
  const { currentWeather } = useCurrentWeatherContext();
  return (
    <StyledWrapper>
      <StyledLeftContainer>
        <StyledTemperature>
          <StyledCurrentTemp>
            {Math.floor(currentWeather?.data?.values.temperature)}&deg;C
          </StyledCurrentTemp>
          <StyledFeel>
            Ощущается как:{" "}
            <StyledFeelTemp>
              {Math.floor(currentWeather?.data?.values.temperatureApparent)}
              &deg;C
            </StyledFeelTemp>
          </StyledFeel>
        </StyledTemperature>
        <StyledElemsLeftContainer>
          <StyledElemLeft>
            <StyledLeftIcon>
              <VisibilityIcon />
            </StyledLeftIcon>
            <StyledLeftElemInfo>
              <StyledElemHeading>Видимость</StyledElemHeading>
              <StyledElemText>
                {currentWeather?.data?.values.visibility} км
              </StyledElemText>
            </StyledLeftElemInfo>
          </StyledElemLeft>
          <StyledElemLeft>
            <StyledLeftIcon>
              <DewIcon />
            </StyledLeftIcon>
            <StyledLeftElemInfo>
              <StyledElemHeading>Точка росы</StyledElemHeading>
              <StyledElemText>
                {Math.round(currentWeather?.data?.values.dewPoint)}&deg;C
              </StyledElemText>
            </StyledLeftElemInfo>
          </StyledElemLeft>
        </StyledElemsLeftContainer>
      </StyledLeftContainer>

      <StyledCenterContainer>
        <StyledStatusIcon
          src={
            iconsData[currentWeather?.data?.values.weatherCode.toString()]
              .img_url
          }
        ></StyledStatusIcon>
        <StyledWeather>
          {iconsData[currentWeather?.data?.values.weatherCode.toString()].desc}
        </StyledWeather>
      </StyledCenterContainer>

      <StyledElemsRightContainer>
        <StyledRightElem>
          <StyledRightIcon>
            <HumidityIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>Влажность</StyledElemHeading>
            <StyledElemText>
              {currentWeather?.data?.values.humidity}%
            </StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElem>

        <StyledRightElem>
          <StyledRightIcon>
            <WindIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>Ветер</StyledElemHeading>
            <StyledElemText>
              {Math.round(currentWeather?.data?.values.windSpeed)} м/с
            </StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElem>

        <StyledRightElemBottom>
          <StyledRightIcon>
            <PressureIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>Давление</StyledElemHeading>
            <StyledElemText>
              {Math.floor(currentWeather?.data?.values.pressureSurfaceLevel)}
            </StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElemBottom>

        <StyledRightElemBottom>
          <StyledRightIcon>
            <UvIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>УФ</StyledElemHeading>
            <StyledElemText>
              {currentWeather?.data?.values.uvIndex}
            </StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElemBottom>
      </StyledElemsRightContainer>
    </StyledWrapper>
  );
}

export default CurrentWeather;
