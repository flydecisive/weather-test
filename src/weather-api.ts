// const WEATHER_API_KEY = "2281bef1cd36f354a6f7a3ef1d792360";
const WEATHER_API_KEY = "DTqu4rsGJMVRStu4S8aGbJlRFTPUxrZp";
// const DAILY_API_PATH = "https://api.openweathermap.org/data/2.5/forecast";
const DAILY_API_PATH = "https://api.tomorrow.io/v4/weather/forecast";
// const CURRENT_API_PATH = "https://api.openweathermap.org/data/2.5/weather";
const CURRENT_API_PATH = "https://api.tomorrow.io/v4/weather/realtime";

// Ежедневный запрос + текущий запрос за погодой

export function getCurrentWeather(city: string) {
  return fetch(
    `${CURRENT_API_PATH}?location=${city}&units=metric&apikey=${WEATHER_API_KEY}`,
    {
      method: "GET",
    }
  ).then((response) => {
    if (!response.ok && response.status === 429) {
      throw new Error("Response limits");
    }

    if (!response.ok && response.status === 400) {
      throw new Error("Bad request");
    }

    return response.json();
  });
}

export function getDailyWeather(city: string) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `${DAILY_API_PATH}?location=${city}&units=metric&apikey=${WEATHER_API_KEY}`,
    options
  ).then((response) => {
    console.log(response);
    return response.json();
  });
}
