import Clear from "./assets/weather-status/10000_clear_large@2x.png";
import Cloudy from "./assets/weather-status/10010_cloudy_large@2x.png";
import Drizzle from "./assets/weather-status/40000_drizzle_large@2x.png";
import Flurries from "./assets/weather-status/50010_flurries_large@2x.png";
import Fog from "./assets/weather-status/20000_fog_large@2x.png";
import FogLight from "./assets/weather-status/21000_fog_light_large@2x.png";
import FreezingDrizzle from "./assets/weather-status/60000_freezing_rain_drizzle_large@2x.png";
import FreezingRainLarge from "./assets/weather-status/60010_freezing_rain_large@2x.png";
import FreezingRainHeavy from "./assets/weather-status/62010_freezing_rain_heavy_large@2x.png";
import FreezingRainLight from "./assets/weather-status/62000_freezing_rain_light_large@2x.png";
import Pellets from "./assets/weather-status/70000_ice_pellets_large@2x.png";
import PelletsHeavy from "./assets/weather-status/71010_ice_pellets_heavy_large@2x.png";
import PelletsLight from "./assets/weather-status/71020_ice_pellets_light_large@2x.png";
import MostlyClear from "./assets/weather-status/11000_mostly_clear_large@2x.png";
import MostlyCloudly from "./assets/weather-status/11020_mostly_cloudy_large@2x.png";
import PartlyCloudly from "./assets/weather-status/11010_partly_cloudy_large@2x.png";
import Rain from "./assets/weather-status/40010_rain_large@2x.png";
import RainLight from "./assets/weather-status/42000_rain_light_large@2x.png";
import RainHeavy from "./assets/weather-status/42010_rain_heavy_large@2x.png";
import Snow from "./assets/weather-status/50000_snow_large@2x.png";
import SnowLight from "./assets/weather-status/51000_snow_light_large@2x.png";
import SnowHeavy from "./assets/weather-status/51010_snow_heavy_large@2x.png";
import Tstorm from "./assets/weather-status/80000_tstorm_large@2x.png";

interface IIconsData {
  [key: string]: { desc: string; img_url: string };
}

export const iconsData: IIconsData = {
  "1000": { desc: "Солнечно", img_url: Clear },
  "1100": { desc: "В основном ясно", img_url: MostlyClear },
  "1101": { desc: "Переменная облачность", img_url: PartlyCloudly },
  "1102": { desc: "Преимущественно облачно", img_url: MostlyCloudly },
  "1001": { desc: "Облачно", img_url: Cloudy },
  "2000": { desc: "Туман", img_url: Fog },
  "2100": { desc: "Легкий туман", img_url: FogLight },
  "4000": { desc: "Морось", img_url: Drizzle },
  "4001": { desc: "Дождь", img_url: Rain },
  "4200": { desc: "Легкий дождь", img_url: RainLight },
  "4201": { desc: "Сильный дождь", img_url: RainHeavy },
  "5000": { desc: "Снег", img_url: Snow },
  "5001": { desc: "Небольшой снегопад", img_url: Flurries },
  "5100": { desc: "Легкий снег", img_url: SnowLight },
  "5101": { desc: "Сильный снегопад", img_url: SnowHeavy },
  "6000": { desc: "Изморозь", img_url: FreezingDrizzle },
  "6001": { desc: "Ледяной дождь", img_url: FreezingRainLarge },
  "6200": { desc: "Легкий ледяной дождь", img_url: FreezingRainLight },
  "6201": { desc: "Сильный ледяной дождь", img_url: FreezingRainHeavy },
  "7000": { desc: "Град", img_url: Pellets },
  "7101": { desc: "Сильный град", img_url: PelletsHeavy },
  "7102": { desc: "Легкий град", img_url: PelletsLight },
  "8000": { desc: "Гроза", img_url: Tstorm },
};
