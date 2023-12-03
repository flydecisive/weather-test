/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StyledWrapper,
  StyledItemsWrapper,
  StyledHeading,
} from "./daily-weather.styled";
import DailyItem from "./daily-item/daily-item";
import { useDailyWeatherContext } from "../../contexts/daily-weather";

function DailyWeather() {
  const { dailyWeather } = useDailyWeatherContext();

  return (
    <StyledWrapper>
      <StyledHeading>Прогноз на 5 дней</StyledHeading>
      <StyledItemsWrapper>
        {dailyWeather?.map((el: any, index: number) => (
          <DailyItem
            onClick={(e: any) => {
              console.log(e.currentTarget.id);
            }}
            key={index}
            data={el}
            id={index}
          />
        ))}
      </StyledItemsWrapper>
    </StyledWrapper>
  );
}

export default DailyWeather;
