/* eslint-disable @typescript-eslint/no-explicit-any */
import { iconsData } from "../../../data/icons-data";
import {
  StyledWrapper,
  StyledInfo,
  StyledStatusIcon,
  StyledStatusWrapper,
  StyledStatusText,
  StyledInfoItem,
  StyledInfoHeading,
  StyledInfoIcon,
  StyledInfoText,
  StyledInfoItemWrapper,
  StyledTimeIcon,
} from "./daily-item-full.styled";
import format from "date-fns/format";
import DewIcon from "../../../assets/img/dew.svg?react";
import HumidityIcon from "../../../assets/img/humidity.svg?react";
import PressureIcon from "../../../assets/img/pressure.svg?react";
import SunsetIcon from "../../../assets/img/sunset.svg?react";
import SunriseIcon from "../../../assets/img/sunrise.svg?react";
import TemperatureIcon from "../../../assets/img/temperature.svg?react";
import VisibilityIcon from "../../../assets/img/visibility.svg?react";
import WindIcon from "../../../assets/img/wind.svg?react";

interface DailyItemFullProps {
  value: any;
}

function DailyItemFull({ value }: DailyItemFullProps) {
  return (
    <StyledWrapper>
      <StyledStatusWrapper>
        <StyledStatusIcon
          src={iconsData[value?.values.weatherCodeMax.toString()].img_url}
        />
        <StyledStatusText>
          {iconsData[value?.values.weatherCodeMax.toString()].desc}
        </StyledStatusText>
      </StyledStatusWrapper>

      <StyledInfo>
        <StyledInfoItem>
          <StyledInfoIcon>
            <TemperatureIcon />
          </StyledInfoIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Температура</StyledInfoHeading>
            <StyledInfoText>
              макс: {Math.round(value?.values.temperatureMax)}&deg;C
            </StyledInfoText>
            <StyledInfoText>
              мин: {Math.round(value?.values.temperatureMin)}&deg;C
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledInfoIcon>
            <HumidityIcon />
          </StyledInfoIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Влажность</StyledInfoHeading>
            <StyledInfoText>
              макс: {Math.round(value?.values.humidityMax)}%
            </StyledInfoText>
            <StyledInfoText>
              мин: {Math.round(value?.values.humidityMin)}%
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledInfoIcon>
            <PressureIcon />
          </StyledInfoIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Давление</StyledInfoHeading>
            <StyledInfoText>
              макс: {Math.round(value?.values.pressureSurfaceLevelMax)}
            </StyledInfoText>
            <StyledInfoText>
              мин: {Math.round(value?.values.pressureSurfaceLevelMin)}
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledTimeIcon>
            <SunriseIcon />
          </StyledTimeIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Рассвет</StyledInfoHeading>
            <StyledInfoText>
              {format(new Date(value?.values.sunriseTime), "HH:mm")}
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledInfoIcon>
            <VisibilityIcon />
          </StyledInfoIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Видимость</StyledInfoHeading>
            <StyledInfoText>
              макс: {Math.round(value?.values.visibilityMax)} км
            </StyledInfoText>
            <StyledInfoText>
              мин: {Math.round(value?.values.visibilityMin)} км
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledInfoIcon>
            <WindIcon />
          </StyledInfoIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Скорость ветра</StyledInfoHeading>
            <StyledInfoText>
              макс: {Math.round(value?.values.windSpeedMax)} м/c
            </StyledInfoText>
            <StyledInfoText>
              мин: {Math.round(value?.values.windSpeedMin)} м/c
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledInfoIcon>
            <DewIcon />
          </StyledInfoIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Точка росы</StyledInfoHeading>
            <StyledInfoText>
              макс: {Math.round(value?.values.dewPointMax)}&deg;C
            </StyledInfoText>
            <StyledInfoText>
              мин: {Math.round(value?.values.dewPointMin)}&deg;C
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledTimeIcon>
            <SunsetIcon />
          </StyledTimeIcon>
          <StyledInfoItemWrapper>
            <StyledInfoHeading>Закат</StyledInfoHeading>
            <StyledInfoText>
              {format(new Date(value?.values.sunsetTime), "HH:mm")}
            </StyledInfoText>
          </StyledInfoItemWrapper>
        </StyledInfoItem>
      </StyledInfo>
    </StyledWrapper>
  );
}

export default DailyItemFull;
