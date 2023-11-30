import { StyledApp, StyledWrapper } from "./App.styled";
import Header from "./components/header/header";
import Location from "./components/location/location";

function App() {
  return (
    <StyledApp>
      <Header></Header>
      <StyledWrapper>
        <Location></Location>
      </StyledWrapper>
    </StyledApp>
  );
}

export default App;
