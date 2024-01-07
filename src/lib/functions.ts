const { OPENWM_API_KEY } = process.env;

export async function getWeather(place: string, lang: "es" | "en" = "es") {
  const req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${OPENWM_API_KEY}&lang=${lang}`,
  );

  const data = await req.json();

  return lang === "es"
    ? `El clima es ${
        data.weather[0].description
      } y la temperatura es de ${Math.round(
        data.main.temp - 273.15,
      )} grados Celsius en ${data.name}`
    : `${data.weather[0].description} with a temperature of ${Math.round(
        data.main.temp - 273.15,
      )} degrees Celsius in ${data.name}`;
}
