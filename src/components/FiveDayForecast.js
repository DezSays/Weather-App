import React, { useState } from "react";
import apiKey from "../.secrets/keys";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const FiveDayForecast = ({ locationKey }) => {
  const [currentWeatherDescription, setCurrentWeatherDescription] =
    useState("");
  const [minTemp, setMinTemp] = useState(Number);
  const [maxTemp, setMaxTemp] = useState(Number);
  const [dayDescription, setDayDescription] = useState("");
  const [nightDescription, setNightDescription] = useState();

  const fetchFiveDayForecast = async () => {
    const getFiveDayForecastData = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
    );
    const fiveDayForecastJSON = await getFiveDayForecastData.json();

    const weatherNow = fiveDayForecastJSON.Headline.Text;
    const min = fiveDayForecastJSON.DailyForecasts[0].Temperature.Minimum.Value;
    const max = fiveDayForecastJSON.DailyForecasts[0].Temperature.Maximum.Value;
    const day = fiveDayForecastJSON.DailyForecasts[0].Day.IconPhrase;
    const night = fiveDayForecastJSON.DailyForecasts[0].Night.IconPhrase;

    setCurrentWeatherDescription(weatherNow);
    setMinTemp(min);
    setMaxTemp(max);
    setDayDescription(day);
    setNightDescription(night);
    console.log(
      `current weather: ${currentWeatherDescription}, min: ${minTemp}, max: ${maxTemp}, day description: ${dayDescription}, night description: ${nightDescription}.`
    );
    
  };

  return (
    <>
      <Card className="weather-card">
        <Card.Img variant="top" id="card-img" src="../weekly-svg.svg" />
        <Card.Body>
          <Button
            variant="primary"
            type="submit"
            onClick={fetchFiveDayForecast}
          >
            <Card.Title>Five Day Forecast</Card.Title>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default FiveDayForecast;
