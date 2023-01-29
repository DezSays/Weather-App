import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CardGroup from "react-bootstrap/CardGroup";
import WeatherForecast from "./WeatherForecast";
import Card from "react-bootstrap/Card";

const LocationKeyCall = () => {
  const apiKey = process.env.REACT_APP_APIKEY;
  const [zip, setZip] = useState("");
  const [locationKey, setLocationKey] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [hiddenHome, setHiddenHome] = useState(false)

  const fetchWeatherLocation = async () => {
    const getWeatherData = await fetch(
      `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${zip}&details=true`
    );
    const weatherJSON = await getWeatherData.json();
    const weatherLocationKey = weatherJSON[0].Key;
    setLocationKey(weatherLocationKey);
  };

  function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode === 13) {
      //13 is the key code for enter
      document.getElementById("button-addon1").click();
      return false;
    }
    return true;
  }

  const handleClick = () => {
    fetchWeatherLocation();
    setDisabled(false);
    setHiddenHome(true)
  };

  return (
    <>
      <InputGroup
        className="mx-auto"
        id="search-bar"
        type="text"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        onKeyUp={searchKeyPress}
      >
        <Button
          type="submit"
          variant="primary"
          id="button-addon1"
          onClick={handleClick}
        >
          Search
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Enter zip code here"
        />
      </InputGroup>
      <CardGroup hidden={disabled} className="mx-auto">
        <WeatherForecast locationKey={locationKey} />
      </CardGroup>
      
      <CardGroup id="weather-description-home" hidden={hiddenHome}>
          <Card.Title id="dezsays-weather-app-card-title" className="text-white">DezSays Weather App</Card.Title>
          <Card.Text id="dezsays-weather-app-card-text" className="text-white">
            <b>
            Welcome to DezSays Weather App! Enter your zip code in the search bar above, and search for the weather forecast in your area. You may select either the current weather forecast or the five day forecast for the given zip code. This application is available thanks to the free Accuweather API. 
            </b>
          </Card.Text>
      </CardGroup>
        
    </>
  );
};

export default LocationKeyCall;
