/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { StyledApp, StyledWrapper, StyledInfo } from "./App.styled";
import Header from "./components/header/header";
import Location from "./components/location/location";
import CurrentWeather from "./components/current-weather/current-weather";
import DailyWeather from "./components/daily-weather/daily-weather";
import { CurrentWeatherContext } from "./contexts/current-weather";

function App() {
  const [currentWeather, setCurrentWeather] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [info, setInfo] = useState<string>("");

  return (
    <CurrentWeatherContext.Provider
      value={{ currentWeather, setCurrentWeather }}
    >
      <StyledApp>
        <Header setIsLoaded={setIsLoaded} setInfo={setInfo} />
        {isLoaded && info.length === 0 ? (
          <StyledWrapper>
            <Location />
            <CurrentWeather />
            <DailyWeather />
          </StyledWrapper>
        ) : (
          <StyledInfo>{info}</StyledInfo>
        )}
      </StyledApp>
    </CurrentWeatherContext.Provider>
  );
}

export default App;
