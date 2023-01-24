import React, { useState, useEffect } from "react";
import apiKey from "../.secrets/keys";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HourlyWeather = ({ locationKey }) => {
  const [displayState, setDisplayState] = useState(0);  
  const [chanceOfRain, setChanceOfRain] = useState(Number);
  const [isCurrentlyRaining, setIsCurrentlyRaining] = useState(Boolean);
  const [rainType, setRainType] = useState("");
  const [rainIntensity, setRainIntensity] = useState("");
  const [temperature, setTemperature] = useState(Number);

  useEffect(() => {
    const data = localStorage.getItem('my-display-state');
    if (data){
      setDisplayState(JSON.parse(data));
    }
    else{
      setDisplayState(0)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-display-state", JSON.stringify(displayState));
  });


  const currentWeatherFetch = async () => {
    const getCurrentWeatherData = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey}?apikey=${apiKey}`
    );
    const currentWeatherJSON = await getCurrentWeatherData.json();
    const rainLikelihood = currentWeatherJSON[0].PrecipitationProbability;
    const isRaining = currentWeatherJSON[0].HasPrecipitation;
    const typeOfRain = currentWeatherJSON[0].PrecipitationType;
    const intensity = currentWeatherJSON[0].PrecipitationIntensity;
    const temp = currentWeatherJSON[0].Temperature.Value;

    setChanceOfRain(rainLikelihood);
    setIsCurrentlyRaining(isRaining);
    setRainType(typeOfRain);
    setRainIntensity(intensity);
    setTemperature(temp);
    setDisplayState(1)
    console.log(
      `Chance of rain: ${chanceOfRain}, is raining: ${isCurrentlyRaining}, type of rain: ${rainType}, rain intensity ${rainIntensity}, temperature: ${temperature}.`
    );
  };

  if(displayState === 0){
      return (
        <>
          <Card className="weather-card">
            <Card.Img variant="top" id="card-img" src="../hourly-svg.svg" />
            <Card.Body>
              <Button
                className="forecast-button"
                variant="primary"
                type="submit"
                onClick={currentWeatherFetch}
              >
                <Card.Title>Weather This Hour</Card.Title>
              </Button>
            </Card.Body>
          </Card>
        </>
      );
  }
  if(displayState === 1){
    return(
        <>
        <h1>HOWDY</h1>
        </>
    )

  }
};

export default HourlyWeather;
