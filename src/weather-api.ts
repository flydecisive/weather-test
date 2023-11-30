const WEATHER_API_KEY = "2281bef1cd36f354a6f7a3ef1d792360";
const DAILY_API_PATH = "https://api.openweathermap.org/data/2.5/forecast/daily";
const CURRENT_API_PATH = "https://api.openweathermap.org/data/2.5/weather";

// Ежедневный запрос + текущий запрос за погодой

export function getCurrentWeather(city: string) {
  return fetch(
    `${CURRENT_API_PATH}?q=${city}&appid=${WEATHER_API_KEY}&units=metric&lang=ru`,
    {
      method: "GET",
    }
  ).then((response) => {
    console.log(response);
    return response.json();
  });
}

export function getDailyWeather(city: string) {
  return fetch(
    `${DAILY_API_PATH}?q=${city}&appid=${WEATHER_API_KEY}&units=metric&lang=ru&cnt=5`,
    {
      method: "GET",
    }
  ).then((response) => {
    console.log(response);
    return response.json();
  });
}
