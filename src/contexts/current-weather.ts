/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";

interface CurrentWeatherProps {
  currentWeather: any;
  setCurrentWeather: (params: any) => void;
}

export const CurrentWeatherContext = React.createContext<CurrentWeatherProps>({
  currentWeather: {},
  setCurrentWeather: function (params: any): void {
    return params;
  },
});

export function useCurrentWeatherContext() {
  const currentWeather = useContext(CurrentWeatherContext);

  return currentWeather;
}
