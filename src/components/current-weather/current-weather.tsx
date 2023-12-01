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
import SunriseIcon from "../../assets/img/sunrise.svg?react";
import SunsetIcon from "../../assets/img/sunset.svg?react";
import TestIc from "../../assets/img/test.svg?react";
import HumidityIcon from "../../assets/img/humidity.svg?react";
import WindIcon from "../../assets/img/wind.svg?react";
import PressureIcon from "../../assets/img/pressure.svg?react";
import UvIcon from "../../assets/img/uv-index.svg?react";

function CurrentWeather() {
  return (
    <StyledWrapper>
      <StyledLeftContainer>
        <StyledTemperature>
          <StyledCurrentTemp>24&deg;C</StyledCurrentTemp>
          <StyledFeel>
            Ощущается как: <StyledFeelTemp>22&deg;C</StyledFeelTemp>
          </StyledFeel>
        </StyledTemperature>
        <StyledElemsLeftContainer>
          <StyledElemLeft>
            <StyledLeftIcon>
              <SunriseIcon />
            </StyledLeftIcon>
            <StyledLeftElemInfo>
              <StyledElemHeading>Sunrise</StyledElemHeading>
              <StyledElemText>06:37 AM</StyledElemText>
            </StyledLeftElemInfo>
          </StyledElemLeft>
          <StyledElemLeft>
            <StyledLeftIcon>
              <SunsetIcon />
            </StyledLeftIcon>
            <StyledLeftElemInfo>
              <StyledElemHeading>Sunset</StyledElemHeading>
              <StyledElemText>06:37 AM</StyledElemText>
            </StyledLeftElemInfo>
          </StyledElemLeft>
        </StyledElemsLeftContainer>
      </StyledLeftContainer>

      <StyledCenterContainer>
        <StyledStatusIcon>
          <TestIc />
        </StyledStatusIcon>
        <StyledWeather>Солнечно</StyledWeather>
      </StyledCenterContainer>

      <StyledElemsRightContainer>
        <StyledRightElem>
          <StyledRightIcon>
            <HumidityIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>Влажность</StyledElemHeading>
            <StyledElemText>06:37 AM</StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElem>

        <StyledRightElem>
          <StyledRightIcon>
            <WindIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>Ветер</StyledElemHeading>
            <StyledElemText>06:37 AM</StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElem>

        <StyledRightElemBottom>
          <StyledRightIcon>
            <PressureIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>Давление</StyledElemHeading>
            <StyledElemText>06:37 AM</StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElemBottom>

        <StyledRightElemBottom>
          <StyledRightIcon>
            <UvIcon />
          </StyledRightIcon>
          <StyledRightElemInfo>
            <StyledElemHeading>УФ</StyledElemHeading>
            <StyledElemText>06:37 AM</StyledElemText>
          </StyledRightElemInfo>
        </StyledRightElemBottom>
      </StyledElemsRightContainer>
    </StyledWrapper>
  );
}

export default CurrentWeather;
