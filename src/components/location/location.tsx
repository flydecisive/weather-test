import {
  StyledWrapper,
  StyledCity,
  StyledTime,
  StyledDate,
} from "./location.styled";

function Location() {
  return (
    <StyledWrapper>
      <StyledCity>Волгоград</StyledCity>
      <div className="datewrapper"></div>
      <StyledTime>14:59</StyledTime>
      <StyledDate>Четверг, 30 ноября</StyledDate>
    </StyledWrapper>
  );
}

export default Location;
