import React, { useState } from "react";
import apiKey from "../.secrets/keys";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const WeatherForecast = ({ locationKey }) => {
  const [displayState, setDisplayState] = useState(0);
  const [chanceOfRain, setChanceOfRain] = useState(Number);
  const [isCurrentlyRaining, setIsCurrentlyRaining] = useState(Boolean);
  const [rainType, setRainType] = useState("");
  const [rainIntensity, setRainIntensity] = useState("");
  const [temperature, setTemperature] = useState(Number);
  const [currentImg, setCurrentImg] = useState('')

  const [currentWeatherDescription, setCurrentWeatherDescription] =
    useState("");

  // Day 1
  const [dayOneMinTemp, setDayOneMinTemp] = useState(Number);
  const [dayOneMaxTemp, setDayOneMaxTemp] = useState(Number);
  const [dayOneDayDescription, setDayOneDayDescription] = useState("");
  const [dayOneNightDescription, setDayOneNightDescription] = useState();
  const [dayOneDate, setDayOneDate] = useState(Date);
  const [dayOneImg, setDayOneImg] = useState('')

  // Day 2
  const [dayTwoMinTemp, setDayTwoMinTemp] = useState(Number);
  const [dayTwoMaxTemp, setDayTwoMaxTemp] = useState(Number);
  const [dayTwoDayDescription, setDayTwoDayDescription] = useState("");
  const [dayTwoNightDescription, setDayTwoNightDescription] = useState();
  const [dayTwoDate, setDayTwoDate] = useState(Date);
  const [dayTwoImg, setDayTwoImg] = useState('')

  // Day 3
  const [dayThreeMinTemp, setDayThreeMinTemp] = useState(Number);
  const [dayThreeMaxTemp, setDayThreeMaxTemp] = useState(Number);
  const [dayThreeDayDescription, setDayThreeDayDescription] = useState("");
  const [dayThreeNightDescription, setDayThreeNightDescription] = useState();
  const [dayThreeDate, setDayThreeDate] = useState(Date);
  const [dayThreeImg, setDayThreeImg] = useState('')

  // Day 4
  const [dayFourMinTemp, setDayFourMinTemp] = useState(Number);
  const [dayFourMaxTemp, setDayFourMaxTemp] = useState(Number);
  const [dayFourDayDescription, setDayFourDayDescription] = useState("");
  const [dayFourNightDescription, setDayFourNightDescription] = useState();
  const [dayFourDate, setDayFourDate] = useState(Date);
  const [dayFourImg, setDayFourImg] = useState('')

  // Day 5
  const [dayFiveMinTemp, setDayFiveMinTemp] = useState(Number);
  const [dayFiveMaxTemp, setDayFiveMaxTemp] = useState(Number);
  const [dayFiveDayDescription, setDayFiveDayDescription] = useState("");
  const [dayFiveNightDescription, setDayFiveNightDescription] = useState();
  const [dayFiveDate, setDayFiveDate] = useState(Date);
  const [dayFiveImg, setDayFiveImg] = useState('')

  const searchBtn = document.getElementById("button-addon1");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      setDisplayState(0);
    });
  }

  const fetchFiveDayForecast = async () => {

    const getFiveDayForecastData = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
    );
    const fiveDayForecastJSON = await getFiveDayForecastData.json();


    // Day 1
    const min1 =
      fiveDayForecastJSON.DailyForecasts[0].Temperature.Minimum.Value;
    const max1 =
      fiveDayForecastJSON.DailyForecasts[0].Temperature.Maximum.Value;
    const day1 = fiveDayForecastJSON.DailyForecasts[0].Day.IconPhrase;
    const night1 = fiveDayForecastJSON.DailyForecasts[0].Night.IconPhrase;
    const date1Unformatted = fiveDayForecastJSON.DailyForecasts[0].Date;
    const date1PartialFormat = new Date(date1Unformatted);
    let date1 = date1PartialFormat.getDay();
    const weatherIconNumberDay1 = fiveDayForecastJSON.DailyForecasts[0].Day.Icon
    const weatherIconNumberNight1 = fiveDayForecastJSON.DailyForecasts[0].Night.Icon

console.log(fiveDayForecastJSON)




    if(date1 === 0){
      date1 = 'Sunday'
    }
    if(date1 === 1){
      date1 = 'Monday'
    }
    if(date1 === 2){
      date1 = 'Tuesday'
    }
    if(date1 === 3){
      date1 = 'Wednesday'
    }
    if(date1 === 4){
      date1 = 'Thursday'
    }
    if(date1 === 5){
      date1 = 'Friday'
    }
    if(date1 === 6){
      date1 = 'Saturday'
    }

    setDayOneMinTemp(min1);
    setDayOneMaxTemp(max1);
    setDayOneDayDescription(day1);
    setDayOneNightDescription(night1);
    setDayOneDate(date1);

    // Day 2
    const min2 =
      fiveDayForecastJSON.DailyForecasts[1].Temperature.Minimum.Value;
    const max2 =
      fiveDayForecastJSON.DailyForecasts[1].Temperature.Maximum.Value;
    const day2 = fiveDayForecastJSON.DailyForecasts[1].Day.IconPhrase;
    const night2 = fiveDayForecastJSON.DailyForecasts[1].Night.IconPhrase;
    const date2Unformatted = fiveDayForecastJSON.DailyForecasts[1].Date;
    const date2PartialFormat = new Date(date2Unformatted);
    let date2 = date2PartialFormat.getDay();
    const weatherIconNumberDay2 = fiveDayForecastJSON.DailyForecasts[1].Day.Icon
    const weatherIconNumberNight2 = fiveDayForecastJSON.DailyForecasts[1].Night.Icon



    if(date2 === 0){
      date2 = 'Sunday'
    }
    if(date2 === 1){
      date2 = 'Monday'
    }
    if(date2 === 2){
      date2 = 'Tuesday'
    }
    if(date2 === 3){
      date2 = 'Wednesday'
    }
    if(date2 === 4){
      date2 = 'Thursday'
    }
    if(date2 === 5){
      date2 = 'Friday'
    }
    if(date2 === 6){
      date2 = 'Saturday'
    }


    setDayTwoMinTemp(min2);
    setDayTwoMaxTemp(max2);
    setDayTwoDayDescription(day2);
    setDayTwoNightDescription(night2);
    setDayTwoDate(date2);

    // Day 3
    const min3 =
      fiveDayForecastJSON.DailyForecasts[2].Temperature.Minimum.Value;
    const max3 =
      fiveDayForecastJSON.DailyForecasts[2].Temperature.Maximum.Value;
    const day3 = fiveDayForecastJSON.DailyForecasts[2].Day.IconPhrase;
    const night3 = fiveDayForecastJSON.DailyForecasts[2].Night.IconPhrase;
    const date3Unformatted = fiveDayForecastJSON.DailyForecasts[2].Date;
    const date3PartialFormat = new Date(date3Unformatted);
    let date3 = date3PartialFormat.getDay();
    const weatherIconNumberDay3 = fiveDayForecastJSON.DailyForecasts[2].Day.Icon
    const weatherIconNumberNight3 = fiveDayForecastJSON.DailyForecasts[2].Night.Icon


    if(date3 === 0){
      date3 = 'Sunday'
    }
    if(date3 === 1){
      date3 = 'Monday'
    }
    if(date3 === 2){
      date3 = 'Tuesday'
    }
    if(date3 === 3){
      date3 = 'Wednesday'
    }
    if(date3 === 4){
      date3 = 'Thursday'
    }
    if(date3 === 5){
      date3 = 'Friday'
    }
    if(date3 === 6){
      date3 = 'Saturday'
    }


    setDayThreeMinTemp(min3);
    setDayThreeMaxTemp(max3);
    setDayThreeDayDescription(day3);
    setDayThreeNightDescription(night3);
    setDayThreeDate(date3);

    // Day 4
    const min4 =
      fiveDayForecastJSON.DailyForecasts[3].Temperature.Minimum.Value;
    const max4 =
      fiveDayForecastJSON.DailyForecasts[3].Temperature.Maximum.Value;
    const day4 = fiveDayForecastJSON.DailyForecasts[3].Day.IconPhrase;
    const night4 = fiveDayForecastJSON.DailyForecasts[3].Night.IconPhrase;
    const date4Unformatted = fiveDayForecastJSON.DailyForecasts[3].Date;
    const date4PartialFormat = new Date(date4Unformatted);
    let date4 = date4PartialFormat.getDay();
    const weatherIconNumberDay4 = fiveDayForecastJSON.DailyForecasts[3].Day.Icon
    const weatherIconNumberNight4 = fiveDayForecastJSON.DailyForecasts[3].Night.Icon


    if(date4 === 0){
      date4 = 'Sunday'
    }
    if(date4 === 1){
      date4 = 'Monday'
    }
    if(date4 === 2){
      date4 = 'Tuesday'
    }
    if(date4 === 3){
      date4 = 'Wednesday'
    }
    if(date4 === 4){
      date4 = 'Thursday'
    }
    if(date4 === 5){
      date4 = 'Friday'
    }
    if(date4 === 6){
      date4 = 'Saturday'
    }


    setDayFourMinTemp(min4);
    setDayFourMaxTemp(max4);
    setDayFourDayDescription(day4);
    setDayFourNightDescription(night4);
    setDayFourDate(date4);

    // Day 5
    const min5 =
      fiveDayForecastJSON.DailyForecasts[4].Temperature.Minimum.Value;
    const max5 =
      fiveDayForecastJSON.DailyForecasts[4].Temperature.Maximum.Value;
    const day5 = fiveDayForecastJSON.DailyForecasts[4].Day.IconPhrase;
    const night5 = fiveDayForecastJSON.DailyForecasts[4].Night.IconPhrase;
    const date5Unformated = fiveDayForecastJSON.DailyForecasts[4].Date;
    const date5PartialFormat = new Date(date5Unformated);
    let date5 = date5PartialFormat.getDay();
    const weatherIconNumberDay5 = fiveDayForecastJSON.DailyForecasts[4].Day.Icon
    const weatherIconNumberNight5 = fiveDayForecastJSON.DailyForecasts[4].Night.Icon


    if(date5 === 0){
      date5 = 'Sunday'
    }
    if(date5 === 1){
      date5 = 'Monday'
    }
    if(date5 === 2){
      date5 = 'Tuesday'
    }
    if(date5 === 3){
      date5 = 'Wednesday'
    }
    if(date5 === 4){
      date5 = 'Thursday'
    }
    if(date5 === 5){
      date5 = 'Friday'
    }
    if(date5 === 6){
      date5 = 'Saturday'
    }


    setDayFiveMinTemp(min5);
    setDayFiveMaxTemp(max5);
    setDayFiveDayDescription(day5);
    setDayFiveNightDescription(night5);
    setDayFiveDate(date5);

    setDisplayState(2);
  };

  const currentWeatherFetch = async () => {
    const getCurrentWeatherData = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey}?apikey=${apiKey}`
    );
    const currentWeatherJSON = await getCurrentWeatherData.json();

    console.log(`Current weather json: ${currentWeatherJSON}`)


    const rainLikelihood = currentWeatherJSON[0].PrecipitationProbability;
    const isRaining = currentWeatherJSON[0].HasPrecipitation;
    const typeOfRain = currentWeatherJSON[0].PrecipitationType;
    const intensity = currentWeatherJSON[0].PrecipitationIntensity;
    const temp = currentWeatherJSON[0].Temperature.Value;
    let weatherIconNumber = currentWeatherJSON[0].WeatherIcon

    // set the img
    if(weatherIconNumber === 1){
      weatherIconNumber = '../1_Sunny.svg'
    } else if(weatherIconNumber === 2){
      weatherIconNumber = '../2_Mostly_Sunny.svg'
    }
     else if(weatherIconNumber === 3){
      weatherIconNumber = '../3_Partly_Sunny.svg'
    }
     else if(weatherIconNumber === 4){
      weatherIconNumber = '../4_Intermittent_Clouds.svg'
    }
     else if(weatherIconNumber === 5){
      weatherIconNumber = '../5_Hazy_Sunshine.svg'
    }
     else if(weatherIconNumber === 6){
      weatherIconNumber = '../6_Mostly_Cloudy.svg'
    }
     else if(weatherIconNumber === 7){
      weatherIconNumber = '../7_Cloudy.svg'
    }
     else if(weatherIconNumber === 8){
      weatherIconNumber = '../8_Dreary_Overcast.svg'
    }
     else if(weatherIconNumber === 11){
      weatherIconNumber = '../11_Fog.svg'
    }
     else if(weatherIconNumber === 12){
      weatherIconNumber = '../12_Showers.svg'
    }
     else if(weatherIconNumber === 13){
      weatherIconNumber = '../13_Mostly_Cloudy_with_Showers.svg'
    }
     else if(weatherIconNumber === 14){
      weatherIconNumber = '../14_Partly_Sunny_with_Showers.svg'
    }
     else if(weatherIconNumber === 15){
      weatherIconNumber = '../15_T-Storms.svg'
    }
     else if(weatherIconNumber === 16){
      weatherIconNumber = '../16_Mostly_Cloudy_with_T_Storms.svg'
    }
     else if(weatherIconNumber === 17){
      weatherIconNumber = '../17_Partly_Sunny_with_Flurries.svg'
    }
     else if(weatherIconNumber === 18){
      weatherIconNumber = '../18_Rain.svg'
    }
     else if(weatherIconNumber === 19){
      weatherIconNumber = '../19_Flurries.svg'
    }
     else if(weatherIconNumber === 20){
      weatherIconNumber = '../20_Mostly_Cloudy_with_Flurries.svg'
    }
     else if(weatherIconNumber === 21){
      weatherIconNumber = '../21_Partyl_Sunny_with_Flurries.svg'
    }
     else if(weatherIconNumber === 22){
      weatherIconNumber = '../22_Snow.svg'
    }
     else if(weatherIconNumber === 23){
      weatherIconNumber = '../23_Mostly_Cloudy_with_Snow.svg'
    }
     else if(weatherIconNumber === 24){
      weatherIconNumber = '../24_Ice.svg'
    }
     else if(weatherIconNumber === 25){
      weatherIconNumber = '../25_Sleet.svg'
    }
     else if(weatherIconNumber === 26){
      weatherIconNumber = '../26_Freezing_Rain.svg'
    }
     else if(weatherIconNumber === 29){
      weatherIconNumber = '../29_Rain_and_Snow.svg'
    }
     else if(weatherIconNumber === 30){
      weatherIconNumber = '../30_Hot.svg'
    }
     else if(weatherIconNumber === 31){
      weatherIconNumber = '../31_Cold.svg'
    }
     else if(weatherIconNumber === 32){
      weatherIconNumber = '../32_Windy.svg'
    }
     else if(weatherIconNumber === 33){
      weatherIconNumber = '../33_Clear.svg'
    }
     else if(weatherIconNumber === 34){
      weatherIconNumber = '../34_Mostly_Clear.svg'
    }
     else if(weatherIconNumber === 35){
      weatherIconNumber = '../35_Partly_Cloudy.svg'
    }
     else if(weatherIconNumber === 36){
      weatherIconNumber = '../36_Intermittent_Clouds.svg'
    }
     else if(weatherIconNumber === 37){
      weatherIconNumber = '../37_Hazy_Moonlight.svg'
    }
     else if(weatherIconNumber === 38){
      weatherIconNumber = '../38_Mostly_Cloudy.svg'
    }
     else if(weatherIconNumber === 39){
      weatherIconNumber = '../39_Partly_Cloudy_with_Showers.svg'
    }
     else if(weatherIconNumber === 40){
      weatherIconNumber = '../40_Mostly_Cloudy_with_Showers.svg'
    }
     else if(weatherIconNumber === 41){
      weatherIconNumber = '../41_Partly_Cloudy_with_T_Storms.svg'
    }
     else if(weatherIconNumber === 42){
      weatherIconNumber = '../42_Mostly_Cloudy_with_T_Storms.svg'
    }
     else if(weatherIconNumber === 43){
      weatherIconNumber = '../43_Mostly_Cloudy_with_Flurries.svg'
    }
     else if(weatherIconNumber === 44){
      weatherIconNumber = '../43_Mostly_Cloudy_with_Snow.svg'
     }else{
      weatherIconNumber ='../1_Sunny.svg'
    }


    console.log(currentWeatherJSON)
    setChanceOfRain(rainLikelihood);
    setIsCurrentlyRaining(isRaining);
    setRainType(typeOfRain);
    setRainIntensity(intensity);
    setTemperature(temp);
    setCurrentImg(weatherIconNumber)








    const getForecastDescriptionData = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
    );
    const forecastDescriptionJSON = await getForecastDescriptionData.json();
    console.log(`Forecast Description JSON: ${forecastDescriptionJSON}`)


    const weatherNow = forecastDescriptionJSON.Headline.Text;


    setCurrentWeatherDescription(weatherNow);
    setDisplayState(1);
    console.log(
      `chance of rain: ${chanceOfRain}, is raining: ${isCurrentlyRaining}, rain type: ${rainType}, rain intensity: ${rainIntensity}`
    );
  };

  if (displayState === 0) {
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
              <Card.Title>Current Weather</Card.Title>
            </Button>
          </Card.Body>
        </Card>

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
  }
  //   below is hourly forecast
  if (displayState === 1) {
    return (
      <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={currentImg} />
          <Card.Body>
            <Card.Title>Current Weather</Card.Title>
            <Card.Text>{currentWeatherDescription}</Card.Text>
            <Card.Text>
                <li>Temperature: {temperature}</li>
                <li>Currently Raining: {isCurrentlyRaining}</li>
                <li>Chance of Rain: {chanceOfRain}</li>
                <li>Rain Type: {rainType}</li>
                <li>Rain Intensity: {rainIntensity}</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </>
    );
  }

  //   below is 5 day forecast
  if (displayState === 2) {
    return (
      <>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src="../hourly-svg.svg" />
            <Card.Body>
              <Card.Title>{dayOneDate}</Card.Title>
              <Card.Text>

                  <li>Minimum Temperature: {dayOneMinTemp}</li>
                  <li>Maximum Temperature: {dayOneMaxTemp}</li>
                  <li>During the Day: {dayOneDayDescription}</li>
                  <li>At Night: {dayOneNightDescription}</li>

              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="../hourly-svg.svg" />
            <Card.Body>
              <Card.Title>{dayTwoDate}</Card.Title>
              <Card.Text>

                  <li>Minimum Temperature: {dayTwoMinTemp}</li>
                  <li>Maximum Temperature: {dayTwoMaxTemp}</li>
                  <li>During the Day: {dayTwoDayDescription}</li>
                  <li>At Night: {dayTwoNightDescription}</li>

              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="../hourly-svg.svg" />
            <Card.Body>
              <Card.Title>{dayThreeDate}</Card.Title>
              <Card.Text>

                  <li>Minimum Temperature: {dayThreeMinTemp}</li>
                  <li>Maximum Temperature: {dayThreeMaxTemp}</li>
                  <li>During the Day: {dayThreeDayDescription}</li>
                  <li>At Night: {dayThreeNightDescription}</li>

              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="../hourly-svg.svg" />
            <Card.Body>
              <Card.Title>{dayFourDate}</Card.Title>
              <Card.Text>

                  <li>Minimum Temperature: {dayFourMinTemp}</li>
                  <li>Maximum Temperature: {dayFourMaxTemp}</li>
                  <li>During the Day: {dayFourDayDescription}</li>
                  <li>At Night: {dayFourNightDescription}</li>

              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="../hourly-svg.svg" />
            <Card.Body>
              <Card.Title>{dayFiveDate}</Card.Title>
              <Card.Text>

                  <li>Minimum Temperature: {dayFiveMinTemp}</li>
                  <li>Maximum Temperature: {dayFiveMaxTemp}</li>
                  <li>During the Day: {dayFiveDayDescription}</li>
                  <li>At Night: {dayFiveNightDescription}</li>

              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
};

export default WeatherForecast;
