import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import apiKey from "../keys/keys";
import CardGroup from "react-bootstrap/CardGroup";
import WeatherForecast from "./WeatherForecast";

const LocationKeyCall = () => {
  const [zip, setZip] = useState("");
  const [locationKey, setLocationKey] = useState("");
  const [disabled, setDisabled] = useState(true);

  const fetchWeatherLocation = async () => {
    const getWeatherData = await fetch(
      `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${zip}&details=true`
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
    </>
  );
};

export default LocationKeyCall;
