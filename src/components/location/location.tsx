import {
  StyledWrapper,
  StyledCity,
  StyledTime,
  StyledDate,
  StyledDateWrapper,
} from "./location.styled";

function Location() {
  return (
    <StyledWrapper>
      <StyledCity>Волгоград</StyledCity>
      <StyledDateWrapper>
        <StyledTime>14:59</StyledTime>
        <StyledDate>Четверг, 30 ноября</StyledDate>
      </StyledDateWrapper>
    </StyledWrapper>
  );
}

export default Location;
