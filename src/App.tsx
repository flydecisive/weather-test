/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { StyledApp, StyledWrapper, StyledInfo } from "./App.styled";
import Header from "./components/header/header";
import Location from "./components/location/location";
import CurrentWeather from "./components/current-weather/current-weather";
import DailyWeather from "./components/daily-weather/daily-weather";
import { CurrentWeatherContext } from "./contexts/current-weather";
import { DailyWeatherContext } from "./contexts/daily-weather";
import Loader from "./components/loader";
import AcceptModal from "./components/modals/location-modal/accept-modal";

function App() {
  const [currentWeather, setCurrentWeather] = useState<any>();
  const [dailyWeather, setDailyWeather] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [info, setInfo] = useState<string>("");
  const [content, setContent] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState<boolean>(false);
  const [acceptModalButtonId, setAcceptModalButtonId] = useState<any>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    if (currentWeather) {
      setInfo("");
    }
  }, [currentWeather]);

  useEffect(() => {
    if (isLoaded && info.length === 0) {
      setContent(
        <StyledWrapper>
          <Location />
          <CurrentWeather />
          <DailyWeather />
        </StyledWrapper>
      );
    } else {
      setContent(<StyledInfo>{info}</StyledInfo>);
    }
  }, [isLoaded, isLoading, info]);

  return (
    <CurrentWeatherContext.Provider
      value={{ currentWeather, setCurrentWeather }}
    >
      <DailyWeatherContext.Provider value={{ dailyWeather, setDailyWeather }}>
        {isAcceptModalOpen ? (
          <AcceptModal
            city={city}
            setIsAcceptModalOpen={setIsAcceptModalOpen}
            setAcceptModalButtonId={setAcceptModalButtonId}
          />
        ) : (
          ""
        )}
        <StyledApp $blur={isAcceptModalOpen}>
          <Header
            setIsLoaded={setIsLoaded}
            setInfo={setInfo}
            setIsLoading={setIsLoading}
            setIsAcceptModalOpen={setIsAcceptModalOpen}
            setCity={setCity}
            acceptModalButtonId={acceptModalButtonId}
            setAcceptModalButtonId={setAcceptModalButtonId}
          />
          {isLoading ? <Loader /> : content}
        </StyledApp>
      </DailyWeatherContext.Provider>
    </CurrentWeatherContext.Provider>
  );
}

export default App;
