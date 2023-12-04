// 25 запросов в час, 500 запросов в сутки

const WEATHER_API_KEY = "DTqu4rsGJMVRStu4S8aGbJlRFTPUxrZp";
const DAILY_API_PATH = "https://api.tomorrow.io/v4/weather/forecast";
const CURRENT_API_PATH = "https://api.tomorrow.io/v4/weather/realtime";

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
    if (!response.ok && response.status === 429) {
      throw new Error("Response limits");
    }

    if (!response.ok && response.status === 400) {
      throw new Error("Bad request");
    }

    return response.json();
  });
}
