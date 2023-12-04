const GEO_API_KEY = "e599942069ac4c5a8f6aab4de58205d5";
const GEO_API_PATH = `https://api.opencagedata.com/geocode/v1/`;

const getUserGeo = (lat: number, long: number) => {
  return fetch(`${GEO_API_PATH}json?q=${lat}+${long}&key=${GEO_API_KEY}`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

export default getUserGeo;
