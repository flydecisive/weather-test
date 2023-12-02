/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";

interface DailyWeatherProps {
  dailyWeather: any;
  setDailyWeather: (params: any) => void;
}

export const DailyWeatherContext = React.createContext<DailyWeatherProps>({
  dailyWeather: {},
  setDailyWeather: function (params: any): void {
    return params;
  },
});

export function useDailyWeatherContext() {
  const dailyWeather = useContext(DailyWeatherContext);

  return dailyWeather;
}
