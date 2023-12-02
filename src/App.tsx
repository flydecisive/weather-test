import { StyledApp, StyledWrapper } from "./App.styled";
import Header from "./components/header/header";
import Location from "./components/location/location";
import CurrentWeather from "./components/current-weather/current-weather";
import DailyWeather from "./components/daily-weather/daily-weather";

function App() {
  return (
    <StyledApp>
      <Header />
      <StyledWrapper>
        <Location />
        <CurrentWeather />
        <DailyWeather />
      </StyledWrapper>
    </StyledApp>
  );
}

export default App;
