/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  StyledWrapper,
  StyledItemsWrapper,
  StyledHeading,
  StyledBackIcon,
} from "./daily-weather.styled";
import DailyItem from "./daily-item/daily-item";
import { useDailyWeatherContext } from "../../contexts/daily-weather";
import DailyItemFull from "./daily-item-full/daily-item-full";
import format from "date-fns/format";
import BackIcon from "../../assets/img/back.svg?react";

function DailyWeather() {
  const { dailyWeather } = useDailyWeatherContext();
  const [selectedItem, setSelectedItem] = useState<any>();
  const [content, setContent] = useState<any>();

  useEffect(() => {
    if (!selectedItem) {
      setContent(
        <>
          <StyledItemsWrapper>
            {dailyWeather?.map((el: any, index: number) => (
              <DailyItem
                onClick={(e: any) => {
                  setSelectedItem(e.currentTarget.id);
                }}
                key={index}
                data={el}
                id={index}
              />
            ))}
          </StyledItemsWrapper>
        </>
      );
    } else {
      setContent(<DailyItemFull value={dailyWeather?.[selectedItem]} />);
    }
  }, [selectedItem, dailyWeather]);

  return (
    <StyledWrapper $selected={selectedItem ? true : false}>
      {selectedItem ? (
        <StyledBackIcon>
          <BackIcon
            onClick={() => {
              setSelectedItem(undefined);
            }}
          />
        </StyledBackIcon>
      ) : (
        ""
      )}
      <StyledHeading>
        {selectedItem
          ? format(new Date(dailyWeather?.[selectedItem].time), "dd.MM.yyyy")
          : "Прогноз на 5 дней"}
      </StyledHeading>
      {content}
    </StyledWrapper>
  );
}

export default DailyWeather;
