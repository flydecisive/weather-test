import {
  StyledWrapper,
  StyledItemsWrapper,
  StyledHeading,
} from "./daily-weather.styled";
import DailyItem from "./daily-item/daily-item";

function DailyWeather() {
  return (
    <StyledWrapper>
      <StyledHeading>Прогноз на 5 дней</StyledHeading>
      <StyledItemsWrapper>
        <DailyItem />
        <DailyItem />
        <DailyItem />
        <DailyItem />
        <DailyItem />
      </StyledItemsWrapper>
    </StyledWrapper>
  );
}

export default DailyWeather;
