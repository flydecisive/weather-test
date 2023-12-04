import styled from "styled-components";

const StyledLogo = styled.p`
  font-size: 48px;
  font-family: "Pacifico";
  font-weight: 400;
  background: linear-gradient(to right, #000428, #004e92);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Logo() {
  return <StyledLogo>WeatherApp</StyledLogo>;
}

export default Logo;
