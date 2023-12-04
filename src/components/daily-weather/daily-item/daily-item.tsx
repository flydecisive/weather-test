/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StyledItem,
  StyledItemText,
  StyledItemElem,
  StyledElemIcon,
  StyledItemInfo,
  StyledStatusIcon,
  StyledItemDate,
} from "./daily-item.styled";
import TemperatureIcon from "../../../assets/img/temperature.svg?react";
import WindIcon from "../../../assets/img/wind.svg?react";
import HumidityIcon from "../../../assets/img/humidity.svg?react";
import PressureIcon from "../../../assets/img/pressure.svg?react";
import format from "date-fns/format";
import { iconsData } from "../../../data/icons-data";

interface DailyItemProps {
  data: any;
  id: number;
  onClick: (params: any) => void;
}

function DailyItem({ data, id, onClick }: DailyItemProps) {
  return (
    <StyledItem id={id} onClick={onClick}>
      <StyledItemDate>
        {format(new Date(data?.time), "dd.MM.yyyy")}
      </StyledItemDate>
      <StyledStatusIcon
        src={iconsData[data?.values?.weatherCodeMax.toString()].img_url}
      ></StyledStatusIcon>
      <StyledItemInfo>
        <StyledItemElem>
          <StyledElemIcon>
            <TemperatureIcon />
          </StyledElemIcon>

          <StyledItemText>
            {Math.round(data?.values?.temperatureAvg)}&deg;C
          </StyledItemText>
        </StyledItemElem>
        <StyledItemElem>
          <StyledElemIcon>
            <WindIcon />
          </StyledElemIcon>

          <StyledItemText>
            {Math.floor(data?.values?.windSpeedAvg)} м/с
          </StyledItemText>
        </StyledItemElem>
        <StyledItemElem>
          <StyledElemIcon>
            <HumidityIcon />
          </StyledElemIcon>
          <StyledItemText>
            {Math.floor(data?.values?.humidityAvg)}%
          </StyledItemText>
        </StyledItemElem>
        <StyledItemElem>
          <StyledElemIcon>
            <PressureIcon />
          </StyledElemIcon>

          <StyledItemText>
            {Math.floor(data?.values?.pressureSurfaceLevelAvg)}
          </StyledItemText>
        </StyledItemElem>
      </StyledItemInfo>
    </StyledItem>
  );
}

export default DailyItem;
