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
import TestIc from "../../../assets/img/test-small.svg?react";

function DailyItem() {
  return (
    <StyledItem>
      <StyledItemDate>01.12.2023</StyledItemDate>
      <StyledStatusIcon>
        <TestIc />
      </StyledStatusIcon>
      <StyledItemInfo>
        <StyledItemElem>
          <StyledElemIcon>
            <TemperatureIcon />
          </StyledElemIcon>
          <StyledItemText>-2&deg;C</StyledItemText>
        </StyledItemElem>
        <StyledItemElem>
          <StyledElemIcon>
            <WindIcon />
          </StyledElemIcon>
          <StyledItemText>3 км/ч</StyledItemText>
        </StyledItemElem>
        <StyledItemElem>
          <StyledElemIcon>
            <HumidityIcon />
          </StyledElemIcon>
          <StyledItemText>38%</StyledItemText>
        </StyledItemElem>
        <StyledItemElem>
          <StyledElemIcon>
            <PressureIcon />
          </StyledElemIcon>
          <StyledItemText>1050</StyledItemText>
        </StyledItemElem>
      </StyledItemInfo>
    </StyledItem>
  );
}

export default DailyItem;
