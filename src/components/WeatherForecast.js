import React, { useState } from "react";

import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const WeatherForecast = ({ locationKey }) => {
  const apiKey = process.env.REACT_APP_APIKEY
  const [displayState, setDisplayState] = useState(0);
  const [chanceOfRain, setChanceOfRain] = useState(Number);
  // eslint-disable-next-line
  const [isCurrentlyRaining, setIsCurrentlyRaining] = useState(Boolean);
  const [rainType, setRainType] = useState("");
  const [rainIntensity, setRainIntensity] = useState("");
  const [temperature, setTemperature] = useState(Number);
  const [currentImg, setCurrentImg] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const [currentWeatherDescription, setCurrentWeatherDescription] =
    useState("");

  // Day 1
  const [dayOneMinTemp, setDayOneMinTemp] = useState(Number);
  const [dayOneMaxTemp, setDayOneMaxTemp] = useState(Number);
  const [dayOneDayDescription, setDayOneDayDescription] = useState("");
  const [dayOneNightDescription, setDayOneNightDescription] = useState();
  const [dayOneDate, setDayOneDate] = useState(Date);
  const [dayOneImg, setDayOneImg] = useState("");

  // Day 2
  const [dayTwoMinTemp, setDayTwoMinTemp] = useState(Number);
  const [dayTwoMaxTemp, setDayTwoMaxTemp] = useState(Number);
  const [dayTwoDayDescription, setDayTwoDayDescription] = useState("");
  const [dayTwoNightDescription, setDayTwoNightDescription] = useState();
  const [dayTwoDate, setDayTwoDate] = useState(Date);
  const [dayTwoImg, setDayTwoImg] = useState("");

  // Day 3
  const [dayThreeMinTemp, setDayThreeMinTemp] = useState(Number);
  const [dayThreeMaxTemp, setDayThreeMaxTemp] = useState(Number);
  const [dayThreeDayDescription, setDayThreeDayDescription] = useState("");
  const [dayThreeNightDescription, setDayThreeNightDescription] = useState();
  const [dayThreeDate, setDayThreeDate] = useState(Date);
  const [dayThreeImg, setDayThreeImg] = useState("");

  // Day 4
  const [dayFourMinTemp, setDayFourMinTemp] = useState(Number);
  const [dayFourMaxTemp, setDayFourMaxTemp] = useState(Number);
  const [dayFourDayDescription, setDayFourDayDescription] = useState("");
  const [dayFourNightDescription, setDayFourNightDescription] = useState();
  const [dayFourDate, setDayFourDate] = useState(Date);
  const [dayFourImg, setDayFourImg] = useState("");

  // Day 5
  const [dayFiveMinTemp, setDayFiveMinTemp] = useState(Number);
  const [dayFiveMaxTemp, setDayFiveMaxTemp] = useState(Number);
  const [dayFiveDayDescription, setDayFiveDayDescription] = useState("");
  const [dayFiveNightDescription, setDayFiveNightDescription] = useState();
  const [dayFiveDate, setDayFiveDate] = useState(Date);
  const [dayFiveImg, setDayFiveImg] = useState("");

  const searchBtn = document.getElementById("button-addon1");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      setDisplayState(0);
    });
  }

  const fetchFiveDayForecast = async () => {
    const getFiveDayForecastData = await fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
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
    let weatherIconNumberDay1 = fiveDayForecastJSON.DailyForecasts[0].Day.Icon;
    let weatherIconNumberNight1 =
      fiveDayForecastJSON.DailyForecasts[0].Night.Icon;

    if (weatherIconNumberDay1 === 1) {
      setDayOneImg("../1_Sunny.svg");
    } else if (weatherIconNumberDay1 === 2) {
      setDayOneImg("../2_Mostly_Sunny.svg");
    } else if (weatherIconNumberDay1 === 3) {
      setDayOneImg("../3_Partly_Sunny.svg");
    } else if (weatherIconNumberDay1 === 4) {
      setDayOneImg("../4_Intermittent_Clouds.svg");
    } else if (weatherIconNumberDay1 === 5) {
      setDayOneImg("../5_Hazy_Sunshine.svg");
    } else if (weatherIconNumberDay1 === 6) {
      setDayOneImg("../6_Mostly_Cloudy.svg");
    } else if (weatherIconNumberDay1 === 7 || weatherIconNumberNight1 === 7) {
      setDayOneImg("../7_Cloudy.svg");
    } else if (weatherIconNumberDay1 === 8 || weatherIconNumberNight1 === 8) {
      setDayOneImg("../8_Dreary_Overcast.svg");
    } else if (weatherIconNumberDay1 === 11 || weatherIconNumberNight1 === 11) {
      setDayOneImg("../11_Fog.svg");
    } else if (weatherIconNumberDay1 === 12 || weatherIconNumberNight1 === 12) {
      setDayOneImg("../12_Showers.svg");
    } else if (weatherIconNumberDay1 === 13) {
      setDayOneImg("../13_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberDay1 === 14) {
      setDayOneImg("../14_Partly_Sunny_with_Showers.svg");
    } else if (weatherIconNumberDay1 === 15 || weatherIconNumberNight1 === 15) {
      setDayOneImg("../15_T-Storms.svg");
    } else if (weatherIconNumberDay1 === 16) {
      setDayOneImg("../16_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberDay1 === 17) {
      setDayOneImg("../17_Partly_Sunny_with_T_Storms.svg");
    } else if (weatherIconNumberDay1 === 18 || weatherIconNumberNight1 === 18) {
      setDayOneImg("../18_Rain.svg");
    } else if (weatherIconNumberDay1 === 19 || weatherIconNumberNight1 === 19) {
      setDayOneImg("../19_Flurries.svg");
    } else if (weatherIconNumberDay1 === 20) {
      setDayOneImg("../20_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberDay1 === 21) {
      setDayOneImg("../21_Partyl_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay1 === 22 || weatherIconNumberNight1 === 22) {
      setDayOneImg("../22_Snow.svg");
    } else if (weatherIconNumberDay1 === 23) {
      setDayOneImg("../23_Mostly_Cloudy_with_Snow.svg");
    } else if (weatherIconNumberDay1 === 24 || weatherIconNumberNight1 === 24) {
      setDayOneImg("../24_Ice.svg");
    } else if (weatherIconNumberDay1 === 25 || weatherIconNumberNight1 === 25) {
      setDayOneImg("../25_Sleet.svg");
    } else if (weatherIconNumberDay1 === 26 || weatherIconNumberNight1 === 26) {
      setDayOneImg("../26_Freezing_Rain.svg");
    } else if (weatherIconNumberDay1 === 29 || weatherIconNumberNight1 === 29) {
      setDayOneImg("../29_Rain_and_Snow.svg");
    } else if (weatherIconNumberDay1 === 30 || weatherIconNumberNight1 === 30) {
      setDayOneImg("../30_Hot.svg");
    } else if (weatherIconNumberDay1 === 31 || weatherIconNumberNight1 === 31) {
      setDayOneImg("../31_Cold.svg");
    } else if (weatherIconNumberDay1 === 32 || weatherIconNumberNight1 === 32) {
      setDayOneImg("../32_Windy.svg");
    } else if (weatherIconNumberNight1 === 33) {
      setDayOneImg("../33_Clear.svg");
    } else if (weatherIconNumberNight1 === 34) {
      setDayOneImg("../34_Mostly_Clear.svg");
    } else if (weatherIconNumberNight1 === 35) {
      setDayOneImg("../35_Partly_Cloudy.svg");
    } else if (weatherIconNumberNight1 === 36) {
      setDayOneImg("../36_Intermittent_Clouds.svg");
    } else if (weatherIconNumberNight1 === 37) {
      setDayOneImg("../37_Hazy_Moonlight.svg");
    } else if (weatherIconNumberNight1 === 38) {
      setDayOneImg("../38_Mostly_Cloudy.svg");
    } else if (weatherIconNumberNight1 === 39) {
      setDayOneImg("../39_Partly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight1 === 40) {
      setDayOneImg("../40_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight1 === 41) {
      setDayOneImg("../41_Partly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight1 === 42) {
      setDayOneImg("../42_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight1 === 43) {
      setDayOneImg("../43_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberNight1 === 44) {
      setDayOneImg("../43_Mostly_Cloudy_with_Snow.svg");
    } else {
      setDayOneImg("../1_Sunny.svg");
    }

    if (date1 === 0) {
      date1 = "Sunday";
    }
    if (date1 === 1) {
      date1 = "Monday";
    }
    if (date1 === 2) {
      date1 = "Tuesday";
    }
    if (date1 === 3) {
      date1 = "Wednesday";
    }
    if (date1 === 4) {
      date1 = "Thursday";
    }
    if (date1 === 5) {
      date1 = "Friday";
    }
    if (date1 === 6) {
      date1 = "Saturday";
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
    let weatherIconNumberDay2 = fiveDayForecastJSON.DailyForecasts[1].Day.Icon;
    let weatherIconNumberNight2 =
      fiveDayForecastJSON.DailyForecasts[1].Night.Icon;

    if (weatherIconNumberDay2 === 1) {
      setDayTwoImg("../1_Sunny.svg");
    } else if (weatherIconNumberDay2 === 2) {
      setDayTwoImg("../2_Mostly_Sunny.svg");
    } else if (weatherIconNumberDay2 === 3) {
      setDayTwoImg("../3_Partly_Sunny.svg");
    } else if (weatherIconNumberDay2 === 4) {
      setDayTwoImg("../4_Intermittent_Clouds.svg");
    } else if (weatherIconNumberDay2 === 5) {
      setDayTwoImg("../5_Hazy_Sunshine.svg");
    } else if (weatherIconNumberDay2 === 6) {
      setDayTwoImg("../6_Mostly_Cloudy.svg");
    } else if (weatherIconNumberDay2 === 7 || weatherIconNumberNight2 === 7) {
      setDayTwoImg("../7_Cloudy.svg");
    } else if (weatherIconNumberDay2 === 8 || weatherIconNumberNight2 === 8) {
      setDayTwoImg("../8_Dreary_Overcast.svg");
    } else if (weatherIconNumberDay2 === 11 || weatherIconNumberNight2 === 11) {
      setDayTwoImg("../11_Fog.svg");
    } else if (weatherIconNumberDay2 === 12 || weatherIconNumberNight2 === 12) {
      setDayTwoImg("../12_Showers.svg");
    } else if (weatherIconNumberDay2 === 13) {
      setDayTwoImg("../13_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberDay2 === 14) {
      setDayTwoImg("../14_Partly_Sunny_with_Showers.svg");
    } else if (weatherIconNumberDay2 === 15 || weatherIconNumberNight2 === 15) {
      setDayTwoImg("../15_T-Storms.svg");
    } else if (weatherIconNumberDay2 === 16) {
      setDayTwoImg("../16_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberDay2 === 17) {
      setDayTwoImg("../17_Partly_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay2 === 18 || weatherIconNumberNight2 === 18) {
      setDayTwoImg("../18_Rain.svg");
    } else if (weatherIconNumberDay2 === 19 || weatherIconNumberNight2 === 19) {
      setDayTwoImg("../19_Flurries.svg");
    } else if (weatherIconNumberDay2 === 20) {
      setDayTwoImg("../20_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberDay2 === 21) {
      setDayTwoImg("../21_Partyl_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay2 === 22 || weatherIconNumberNight2 === 22) {
      setDayTwoImg("../22_Snow.svg");
    } else if (weatherIconNumberDay2 === 23) {
      setDayTwoImg("../23_Mostly_Cloudy_with_Snow.svg");
    } else if (weatherIconNumberDay2 === 24 || weatherIconNumberNight2 === 24) {
      setDayTwoImg("../24_Ice.svg");
    } else if (weatherIconNumberDay2 === 25 || weatherIconNumberNight2 === 25) {
      setDayTwoImg("../25_Sleet.svg");
    } else if (weatherIconNumberDay2 === 26 || weatherIconNumberNight2 === 26) {
      setDayTwoImg("../26_Freezing_Rain.svg");
    } else if (weatherIconNumberDay2 === 29 || weatherIconNumberNight2 === 29) {
      setDayTwoImg("../29_Rain_and_Snow.svg");
    } else if (weatherIconNumberDay2 === 30 || weatherIconNumberNight2 === 30) {
      setDayTwoImg("../30_Hot.svg");
    } else if (weatherIconNumberDay2 === 31 || weatherIconNumberNight2 === 31) {
      setDayTwoImg("../31_Cold.svg");
    } else if (weatherIconNumberDay2 === 32 || weatherIconNumberNight2 === 32) {
      setDayTwoImg("../32_Windy.svg");
    } else if (weatherIconNumberNight2 === 33) {
      setDayTwoImg("../33_Clear.svg");
    } else if (weatherIconNumberNight2 === 34) {
      setDayTwoImg("../34_Mostly_Clear.svg");
    } else if (weatherIconNumberNight2 === 35) {
      setDayTwoImg("../35_Partly_Cloudy.svg");
    } else if (weatherIconNumberNight2 === 36) {
      setDayTwoImg("../36_Intermittent_Clouds.svg");
    } else if (weatherIconNumberNight2 === 37) {
      setDayTwoImg("../37_Hazy_Moonlight.svg");
    } else if (weatherIconNumberNight2 === 38) {
      setDayTwoImg("../38_Mostly_Cloudy.svg");
    } else if (weatherIconNumberNight2 === 39) {
      setDayTwoImg("../39_Partly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight2 === 40) {
      setDayTwoImg("../40_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight2 === 41) {
      setDayTwoImg("../41_Partly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight2 === 42) {
      setDayTwoImg("../42_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight2 === 43) {
      setDayTwoImg("../43_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberNight2 === 44) {
      setDayTwoImg("../43_Mostly_Cloudy_with_Snow.svg");
    } else {
      setDayTwoImg("../1_Sunny.svg");
    }

    if (date2 === 0) {
      date2 = "Sunday";
    }
    if (date2 === 1) {
      date2 = "Monday";
    }
    if (date2 === 2) {
      date2 = "Tuesday";
    }
    if (date2 === 3) {
      date2 = "Wednesday";
    }
    if (date2 === 4) {
      date2 = "Thursday";
    }
    if (date2 === 5) {
      date2 = "Friday";
    }
    if (date2 === 6) {
      date2 = "Saturday";
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
    let weatherIconNumberDay3 = fiveDayForecastJSON.DailyForecasts[2].Day.Icon;
    let weatherIconNumberNight3 =
      fiveDayForecastJSON.DailyForecasts[2].Night.Icon;

    if (weatherIconNumberDay3 === 1) {
      setDayThreeImg("../1_Sunny.svg");
    } else if (weatherIconNumberDay3 === 2) {
      setDayThreeImg("../2_Mostly_Sunny.svg");
    } else if (weatherIconNumberDay3 === 3) {
      setDayThreeImg("../3_Partly_Sunny.svg");
    } else if (weatherIconNumberDay3 === 4) {
      setDayThreeImg("../4_Intermittent_Clouds.svg");
    } else if (weatherIconNumberDay3 === 5) {
      setDayThreeImg("../5_Hazy_Sunshine.svg");
    } else if (weatherIconNumberDay3 === 6) {
      setDayThreeImg("../6_Mostly_Cloudy.svg");
    } else if (weatherIconNumberDay3 === 7 || weatherIconNumberNight3 === 7) {
      setDayThreeImg("../7_Cloudy.svg");
    } else if (weatherIconNumberDay3 === 8 || weatherIconNumberNight3 === 8) {
      setDayThreeImg("../8_Dreary_Overcast.svg");
    } else if (weatherIconNumberDay3 === 11 || weatherIconNumberNight3 === 11) {
      setDayThreeImg("../11_Fog.svg");
    } else if (weatherIconNumberDay3 === 12 || weatherIconNumberNight3 === 12) {
      setDayThreeImg("../12_Showers.svg");
    } else if (weatherIconNumberDay3 === 13) {
      setDayThreeImg("../13_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberDay3 === 14) {
      setDayThreeImg("../14_Partly_Sunny_with_Showers.svg");
    } else if (weatherIconNumberDay3 === 15 || weatherIconNumberNight3 === 15) {
      setDayThreeImg("../15_T-Storms.svg");
    } else if (weatherIconNumberDay3 === 16) {
      setDayThreeImg("../16_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberDay3 === 17) {
      setDayThreeImg("../17_Partly_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay3 === 18 || weatherIconNumberNight3 === 18) {
      setDayThreeImg("../18_Rain.svg");
    } else if (weatherIconNumberDay3 === 19 || weatherIconNumberNight3 === 19) {
      setDayThreeImg("../19_Flurries.svg");
    } else if (weatherIconNumberDay3 === 20) {
      setDayThreeImg("../20_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberDay3 === 21) {
      setDayThreeImg("../21_Partyl_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay3 === 22 || weatherIconNumberNight3 === 22) {
      setDayThreeImg("../22_Snow.svg");
    } else if (weatherIconNumberDay3 === 23) {
      setDayThreeImg("../23_Mostly_Cloudy_with_Snow.svg");
    } else if (weatherIconNumberDay3 === 24 || weatherIconNumberNight3 === 24) {
      setDayThreeImg("../24_Ice.svg");
    } else if (weatherIconNumberDay3 === 25 || weatherIconNumberNight3 === 25) {
      setDayThreeImg("../25_Sleet.svg");
    } else if (weatherIconNumberDay3 === 26 || weatherIconNumberNight3 === 26) {
      setDayThreeImg("../26_Freezing_Rain.svg");
    } else if (weatherIconNumberDay3 === 29 || weatherIconNumberNight3 === 29) {
      setDayThreeImg("../29_Rain_and_Snow.svg");
    } else if (weatherIconNumberDay3 === 30 || weatherIconNumberNight3 === 30) {
      setDayThreeImg("../30_Hot.svg");
    } else if (weatherIconNumberDay3 === 31 || weatherIconNumberNight3 === 31) {
      setDayThreeImg("../31_Cold.svg");
    } else if (weatherIconNumberDay3 === 32 || weatherIconNumberNight3 === 32) {
      setDayThreeImg("../32_Windy.svg");
    } else if (weatherIconNumberNight3 === 33) {
      setDayThreeImg("../33_Clear.svg");
    } else if (weatherIconNumberNight3 === 34) {
      setDayThreeImg("../34_Mostly_Clear.svg");
    } else if (weatherIconNumberNight3 === 35) {
      setDayThreeImg("../35_Partly_Cloudy.svg");
    } else if (weatherIconNumberNight3 === 36) {
      setDayThreeImg("../36_Intermittent_Clouds.svg");
    } else if (weatherIconNumberNight3 === 37) {
      setDayThreeImg("../37_Hazy_Moonlight.svg");
    } else if (weatherIconNumberNight3 === 38) {
      setDayThreeImg("../38_Mostly_Cloudy.svg");
    } else if (weatherIconNumberNight3 === 39) {
      setDayThreeImg("../39_Partly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight3 === 40) {
      setDayThreeImg("../40_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight3 === 41) {
      setDayThreeImg("../41_Partly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight3 === 42) {
      setDayThreeImg("../42_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight3 === 43) {
      setDayThreeImg("../43_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberNight3 === 44) {
      setDayThreeImg("../43_Mostly_Cloudy_with_Snow.svg");
    } else {
      setDayThreeImg("../1_Sunny.svg");
    }

    if (date3 === 0) {
      date3 = "Sunday";
    }
    if (date3 === 1) {
      date3 = "Monday";
    }
    if (date3 === 2) {
      date3 = "Tuesday";
    }
    if (date3 === 3) {
      date3 = "Wednesday";
    }
    if (date3 === 4) {
      date3 = "Thursday";
    }
    if (date3 === 5) {
      date3 = "Friday";
    }
    if (date3 === 6) {
      date3 = "Saturday";
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
    let weatherIconNumberDay4 = fiveDayForecastJSON.DailyForecasts[3].Day.Icon;
    let weatherIconNumberNight4 =
      fiveDayForecastJSON.DailyForecasts[3].Night.Icon;

    if (weatherIconNumberDay4 === 1) {
      setDayFourImg("../1_Sunny.svg");
    } else if (weatherIconNumberDay4 === 2) {
      setDayFourImg("../2_Mostly_Sunny.svg");
    } else if (weatherIconNumberDay4 === 3) {
      setDayFourImg("../3_Partly_Sunny.svg");
    } else if (weatherIconNumberDay4 === 4) {
      setDayFourImg("../4_Intermittent_Clouds.svg");
    } else if (weatherIconNumberDay4 === 5) {
      setDayFourImg("../5_Hazy_Sunshine.svg");
    } else if (weatherIconNumberDay4 === 6) {
      setDayFourImg("../6_Mostly_Cloudy.svg");
    } else if (weatherIconNumberDay4 === 7 || weatherIconNumberNight4 === 7) {
      setDayFourImg("../7_Cloudy.svg");
    } else if (weatherIconNumberDay4 === 8 || weatherIconNumberNight4 === 8) {
      setDayFourImg("../8_Dreary_Overcast.svg");
    } else if (weatherIconNumberDay4 === 11 || weatherIconNumberNight4 === 11) {
      setDayFourImg("../11_Fog.svg");
    } else if (weatherIconNumberDay4 === 12 || weatherIconNumberNight4 === 12) {
      setDayFourImg("../12_Showers.svg");
    } else if (weatherIconNumberDay4 === 13) {
      setDayFourImg("../13_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberDay4 === 14) {
      setDayFourImg("../14_Partly_Sunny_with_Showers.svg");
    } else if (weatherIconNumberDay4 === 15 || weatherIconNumberNight4 === 15) {
      setDayFourImg("../15_T-Storms.svg");
    } else if (weatherIconNumberDay4 === 16) {
      setDayFourImg("../16_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberDay4 === 17) {
      setDayFourImg("../17_Partly_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay4 === 18 || weatherIconNumberNight4 === 18) {
      setDayFourImg("../18_Rain.svg");
    } else if (weatherIconNumberDay4 === 19 || weatherIconNumberNight4 === 19) {
      setDayFourImg("../19_Flurries.svg");
    } else if (weatherIconNumberDay4 === 20) {
      setDayFourImg("../20_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberDay4 === 21) {
      setDayFourImg("../21_Partyl_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay4 === 22 || weatherIconNumberNight4 === 22) {
      setDayFourImg("../22_Snow.svg");
    } else if (weatherIconNumberDay4 === 23) {
      setDayFourImg("../23_Mostly_Cloudy_with_Snow.svg");
    } else if (weatherIconNumberDay4 === 24 || weatherIconNumberNight4 === 24) {
      setDayFourImg("../24_Ice.svg");
    } else if (weatherIconNumberDay4 === 25 || weatherIconNumberNight4 === 25) {
      setDayFourImg("../25_Sleet.svg");
    } else if (weatherIconNumberDay4 === 26 || weatherIconNumberNight4 === 26) {
      setDayFourImg("../26_Freezing_Rain.svg");
    } else if (weatherIconNumberDay4 === 29 || weatherIconNumberNight4 === 29) {
      setDayFourImg("../29_Rain_and_Snow.svg");
    } else if (weatherIconNumberDay4 === 30 || weatherIconNumberNight4 === 30) {
      setDayFourImg("../30_Hot.svg");
    } else if (weatherIconNumberDay4 === 31 || weatherIconNumberNight4 === 31) {
      setDayFourImg("../31_Cold.svg");
    } else if (weatherIconNumberDay4 === 32 || weatherIconNumberNight4 === 32) {
      setDayFourImg("../32_Windy.svg");
    } else if (weatherIconNumberNight4 === 33) {
      setDayFourImg("../33_Clear.svg");
    } else if (weatherIconNumberNight4 === 34) {
      setDayFourImg("../34_Mostly_Clear.svg");
    } else if (weatherIconNumberNight4 === 35) {
      setDayFourImg("../35_Partly_Cloudy.svg");
    } else if (weatherIconNumberNight4 === 36) {
      setDayFourImg("../36_Intermittent_Clouds.svg");
    } else if (weatherIconNumberNight4 === 37) {
      setDayFourImg("../37_Hazy_Moonlight.svg");
    } else if (weatherIconNumberNight4 === 38) {
      setDayFourImg("../38_Mostly_Cloudy.svg");
    } else if (weatherIconNumberNight4 === 39) {
      setDayFourImg("../39_Partly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight4 === 40) {
      setDayFourImg("../40_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight4 === 41) {
      setDayFourImg("../41_Partly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight4 === 42) {
      setDayFourImg("../42_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight4 === 43) {
      setDayFourImg("../43_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberNight4 === 44) {
      setDayFourImg("../43_Mostly_Cloudy_with_Snow.svg");
    } else {
      setDayFourImg("../1_Sunny.svg");
    }

    if (date4 === 0) {
      date4 = "Sunday";
    }
    if (date4 === 1) {
      date4 = "Monday";
    }
    if (date4 === 2) {
      date4 = "Tuesday";
    }
    if (date4 === 3) {
      date4 = "Wednesday";
    }
    if (date4 === 4) {
      date4 = "Thursday";
    }
    if (date4 === 5) {
      date4 = "Friday";
    }
    if (date4 === 6) {
      date4 = "Saturday";
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
    let weatherIconNumberDay5 = fiveDayForecastJSON.DailyForecasts[4].Day.Icon;
    let weatherIconNumberNight5 =
      fiveDayForecastJSON.DailyForecasts[4].Night.Icon;

    if (weatherIconNumberDay5 === 1) {
      setDayFiveImg("../1_Sunny.svg");
    } else if (weatherIconNumberDay5 === 2) {
      setDayFiveImg("../2_Mostly_Sunny.svg");
    } else if (weatherIconNumberDay5 === 3) {
      setDayFiveImg("../3_Partly_Sunny.svg");
    } else if (weatherIconNumberDay5 === 4) {
      setDayFiveImg("../4_Intermittent_Clouds.svg");
    } else if (weatherIconNumberDay5 === 5) {
      setDayFiveImg("../5_Hazy_Sunshine.svg");
    } else if (weatherIconNumberDay5 === 6) {
      setDayFiveImg("../6_Mostly_Cloudy.svg");
    } else if (weatherIconNumberDay5 === 7 || weatherIconNumberNight5 === 7) {
      setDayFiveImg("../7_Cloudy.svg");
    } else if (weatherIconNumberDay5 === 8 || weatherIconNumberNight5 === 8) {
      setDayFiveImg("../8_Dreary_Overcast.svg");
    } else if (weatherIconNumberDay5 === 11 || weatherIconNumberNight5 === 11) {
      setDayFiveImg("../11_Fog.svg");
    } else if (weatherIconNumberDay5 === 12 || weatherIconNumberNight5 === 12) {
      setDayFiveImg("../12_Showers.svg");
    } else if (weatherIconNumberDay5 === 13) {
      setDayFiveImg("../13_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberDay5 === 14) {
      setDayFiveImg("../14_Partly_Sunny_with_Showers.svg");
    } else if (weatherIconNumberDay5 === 15 || weatherIconNumberNight5 === 15) {
      setDayFiveImg("../15_T-Storms.svg");
    } else if (weatherIconNumberDay5 === 16) {
      setDayFiveImg("../16_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberDay5 === 17) {
      setDayFiveImg("../17_Partly_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay5 === 18 || weatherIconNumberNight5 === 18) {
      setDayFiveImg("../18_Rain.svg");
    } else if (weatherIconNumberDay5 === 19 || weatherIconNumberNight5 === 19) {
      setDayFiveImg("../19_Flurries.svg");
    } else if (weatherIconNumberDay5 === 20) {
      setDayFiveImg("../20_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberDay5 === 21) {
      setDayFiveImg("../21_Partyl_Sunny_with_Flurries.svg");
    } else if (weatherIconNumberDay5 === 22 || weatherIconNumberNight5 === 22) {
      setDayFiveImg("../22_Snow.svg");
    } else if (weatherIconNumberDay5 === 23) {
      setDayFiveImg("../23_Mostly_Cloudy_with_Snow.svg");
    } else if (weatherIconNumberDay5 === 24 || weatherIconNumberNight5 === 24) {
      setDayFiveImg("../24_Ice.svg");
    } else if (weatherIconNumberDay5 === 25 || weatherIconNumberNight5 === 25) {
      setDayFiveImg("../25_Sleet.svg");
    } else if (weatherIconNumberDay5 === 26 || weatherIconNumberNight5 === 26) {
      setDayFiveImg("../26_Freezing_Rain.svg");
    } else if (weatherIconNumberDay5 === 29 || weatherIconNumberNight5 === 29) {
      setDayFiveImg("../29_Rain_and_Snow.svg");
    } else if (weatherIconNumberDay5 === 30 || weatherIconNumberNight5 === 30) {
      setDayFiveImg("../30_Hot.svg");
    } else if (weatherIconNumberDay5 === 31 || weatherIconNumberNight5 === 31) {
      setDayFiveImg("../31_Cold.svg");
    } else if (weatherIconNumberDay5 === 32 || weatherIconNumberNight5 === 32) {
      setDayFiveImg("../32_Windy.svg");
    } else if (weatherIconNumberNight5 === 33) {
      setDayFiveImg("../33_Clear.svg");
    } else if (weatherIconNumberNight5 === 34) {
      setDayFiveImg("../34_Mostly_Clear.svg");
    } else if (weatherIconNumberNight5 === 35) {
      setDayFiveImg("../35_Partly_Cloudy.svg");
    } else if (weatherIconNumberNight5 === 36) {
      setDayFiveImg("../36_Intermittent_Clouds.svg");
    } else if (weatherIconNumberNight5 === 37) {
      setDayFiveImg("../37_Hazy_Moonlight.svg");
    } else if (weatherIconNumberNight5 === 38) {
      setDayFiveImg("../38_Mostly_Cloudy.svg");
    } else if (weatherIconNumberNight5 === 39) {
      setDayFiveImg("../39_Partly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight5 === 40) {
      setDayFiveImg("../40_Mostly_Cloudy_with_Showers.svg");
    } else if (weatherIconNumberNight5 === 41) {
      setDayFiveImg("../41_Partly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight5 === 42) {
      setDayFiveImg("../42_Mostly_Cloudy_with_T_Storms.svg");
    } else if (weatherIconNumberNight5 === 43) {
      setDayFiveImg("../43_Mostly_Cloudy_with_Flurries.svg");
    } else if (weatherIconNumberNight5 === 44) {
      setDayFiveImg("../43_Mostly_Cloudy_with_Snow.svg");
    } else {
      setDayFiveImg("../1_Sunny.svg");
    }

    if (date5 === 0) {
      date5 = "Sunday";
    }
    if (date5 === 1) {
      date5 = "Monday";
    }
    if (date5 === 2) {
      date5 = "Tuesday";
    }
    if (date5 === 3) {
      date5 = "Wednesday";
    }
    if (date5 === 4) {
      date5 = "Thursday";
    }
    if (date5 === 5) {
      date5 = "Friday";
    }
    if (date5 === 6) {
      date5 = "Saturday";
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
      `https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey}?apikey=${apiKey}`
    );
    const currentWeatherJSON = await getCurrentWeatherData.json();

    console.log(`Current weather json: ${currentWeatherJSON}`);

    const rainLikelihood = currentWeatherJSON[0].PrecipitationProbability;
    const isRaining = currentWeatherJSON[0].HasPrecipitation;
    const typeOfRain = currentWeatherJSON[0].PrecipitationType;
    const intensity = currentWeatherJSON[0].PrecipitationIntensity;
    const temp = currentWeatherJSON[0].Temperature.Value;

    let weatherIconNumber = currentWeatherJSON[0].WeatherIcon;

    // set the img
    if (weatherIconNumber === 1) {
      weatherIconNumber = "../1_Sunny.svg";
    } else if (weatherIconNumber === 2) {
      weatherIconNumber = "../2_Mostly_Sunny.svg";
    } else if (weatherIconNumber === 3) {
      weatherIconNumber = "../3_Partly_Sunny.svg";
    } else if (weatherIconNumber === 4) {
      weatherIconNumber = "../4_Intermittent_Clouds.svg";
    } else if (weatherIconNumber === 5) {
      weatherIconNumber = "../5_Hazy_Sunshine.svg";
    } else if (weatherIconNumber === 6) {
      weatherIconNumber = "../6_Mostly_Cloudy.svg";
    } else if (weatherIconNumber === 7) {
      weatherIconNumber = "../7_Cloudy.svg";
    } else if (weatherIconNumber === 8) {
      weatherIconNumber = "../8_Dreary_Overcast.svg";
    } else if (weatherIconNumber === 11) {
      weatherIconNumber = "../11_Fog.svg";
    } else if (weatherIconNumber === 12) {
      weatherIconNumber = "../12_Showers.svg";
    } else if (weatherIconNumber === 13) {
      weatherIconNumber = "../13_Mostly_Cloudy_with_Showers.svg";
    } else if (weatherIconNumber === 14) {
      weatherIconNumber = "../14_Partly_Sunny_with_Showers.svg";
    } else if (weatherIconNumber === 15) {
      weatherIconNumber = "../15_T-Storms.svg";
    } else if (weatherIconNumber === 16) {
      weatherIconNumber = "../16_Mostly_Cloudy_with_T_Storms.svg";
    } else if (weatherIconNumber === 17) {
      weatherIconNumber = "../17_Partly_Sunny_with_Flurries.svg";
    } else if (weatherIconNumber === 18) {
      weatherIconNumber = "../18_Rain.svg";
    } else if (weatherIconNumber === 19) {
      weatherIconNumber = "../19_Flurries.svg";
    } else if (weatherIconNumber === 20) {
      weatherIconNumber = "../20_Mostly_Cloudy_with_Flurries.svg";
    } else if (weatherIconNumber === 21) {
      weatherIconNumber = "../21_Partyl_Sunny_with_Flurries.svg";
    } else if (weatherIconNumber === 22) {
      weatherIconNumber = "../22_Snow.svg";
    } else if (weatherIconNumber === 23) {
      weatherIconNumber = "../23_Mostly_Cloudy_with_Snow.svg";
    } else if (weatherIconNumber === 24) {
      weatherIconNumber = "../24_Ice.svg";
    } else if (weatherIconNumber === 25) {
      weatherIconNumber = "../25_Sleet.svg";
    } else if (weatherIconNumber === 26) {
      weatherIconNumber = "../26_Freezing_Rain.svg";
    } else if (weatherIconNumber === 29) {
      weatherIconNumber = "../29_Rain_and_Snow.svg";
    } else if (weatherIconNumber === 30) {
      weatherIconNumber = "../30_Hot.svg";
    } else if (weatherIconNumber === 31) {
      weatherIconNumber = "../31_Cold.svg";
    } else if (weatherIconNumber === 32) {
      weatherIconNumber = "../32_Windy.svg";
    } else if (weatherIconNumber === 33) {
      weatherIconNumber = "../33_Clear.svg";
    } else if (weatherIconNumber === 34) {
      weatherIconNumber = "../34_Mostly_Clear.svg";
    } else if (weatherIconNumber === 35) {
      weatherIconNumber = "../35_Partly_Cloudy.svg";
    } else if (weatherIconNumber === 36) {
      weatherIconNumber = "../36_Intermittent_Clouds.svg";
    } else if (weatherIconNumber === 37) {
      weatherIconNumber = "../37_Hazy_Moonlight.svg";
    } else if (weatherIconNumber === 38) {
      weatherIconNumber = "../38_Mostly_Cloudy.svg";
    } else if (weatherIconNumber === 39) {
      weatherIconNumber = "../39_Partly_Cloudy_with_Showers.svg";
    } else if (weatherIconNumber === 40) {
      weatherIconNumber = "../40_Mostly_Cloudy_with_Showers.svg";
    } else if (weatherIconNumber === 41) {
      weatherIconNumber = "../41_Partly_Cloudy_with_T_Storms.svg";
    } else if (weatherIconNumber === 42) {
      weatherIconNumber = "../42_Mostly_Cloudy_with_T_Storms.svg";
    } else if (weatherIconNumber === 43) {
      weatherIconNumber = "../43_Mostly_Cloudy_with_Flurries.svg";
    } else if (weatherIconNumber === 44) {
      weatherIconNumber = "../43_Mostly_Cloudy_with_Snow.svg";
    } else {
      weatherIconNumber = "../1_Sunny.svg";
    }

    if (isRaining === true) {
      setIsHidden(false);
    }

    setChanceOfRain(rainLikelihood);
    setIsCurrentlyRaining(isRaining);
    setRainType(typeOfRain);
    setRainIntensity(intensity);
    setTemperature(temp);
    setCurrentImg(weatherIconNumber);

    const getForecastDescriptionData = await fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
    );
    const forecastDescriptionJSON = await getForecastDescriptionData.json();
    const weatherNow = forecastDescriptionJSON.Headline.Text;

    setCurrentWeatherDescription(weatherNow);
    setDisplayState(1);
  };

  // below is the initial state
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
        <CardGroup className="mx-auto">
          <Card className="weather-card">
            <Card.Img variant="top" id="card-img" src={currentImg} />
            <Card.Body>
              <Card.Title>Current Weather</Card.Title>
              <Card.Text>{currentWeatherDescription}</Card.Text>
              <Card.Text>
                <li className="li-temp">Temperature: {temperature}</li>
                <li className="li-chance-of-rain">Chance of Rain: {chanceOfRain}</li>
                <li className="li-rain-type-intensity" hidden={isHidden}>Rain Type: {rainType}</li>
                <li className="li-rain-type-intensity" hidden={isHidden}>Rain Intensity: {rainIntensity}</li>
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
          <Card className="five-day-weather-card">
            <Card.Img variant="top" src={dayOneImg} />
            <Card.Body>
              <Card.Title>{dayOneDate}</Card.Title>
              <Card.Text>
                <li className="li-cold-temp">Minimum Temperature: {dayOneMinTemp}</li>
                <li className="li-hot-temp">Maximum Temperature: {dayOneMaxTemp}</li>
                <li className="li-day">During the Day: {dayOneDayDescription}</li>
                <li className="li-night">At Night: {dayOneNightDescription}</li>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="five-day-weather-card">
            <Card.Img variant="top" src={dayTwoImg} />
            <Card.Body>
              <Card.Title>{dayTwoDate}</Card.Title>
              <Card.Text>
                <li className="li-cold-temp">Minimum Temperature: {dayTwoMinTemp}</li>
                <li className="li-hot-temp">Maximum Temperature: {dayTwoMaxTemp}</li>
                <li className="li-day">During the Day: {dayTwoDayDescription}</li>
                <li className="li-night">At Night: {dayTwoNightDescription}</li>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="five-day-weather-card">
            <Card.Img variant="top" src={dayThreeImg} />
            <Card.Body>
              <Card.Title>{dayThreeDate}</Card.Title>
              <Card.Text>
                <li className="li-cold-temp">Minimum Temperature: {dayThreeMinTemp}</li>
                <li className="li-hot-temp">Maximum Temperature: {dayThreeMaxTemp}</li>
                <li className="li-day">During the Day: {dayThreeDayDescription}</li>
                <li className="li-night">At Night: {dayThreeNightDescription}</li>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="five-day-weather-card">
            <Card.Img variant="top" src={dayFourImg} />
            <Card.Body>
              <Card.Title>{dayFourDate}</Card.Title>
              <Card.Text>
                <li className="li-cold-temp">Minimum Temperature: {dayFourMinTemp}</li>
                <li className="li-hot-temp">Maximum Temperature: {dayFourMaxTemp}</li>
                <li className="li-day">During the Day: {dayFourDayDescription}</li>
                <li className="li-night">At Night: {dayFourNightDescription}</li>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="five-day-weather-card">
            <Card.Img variant="top" src={dayFiveImg} />
            <Card.Body>
              <Card.Title>{dayFiveDate}</Card.Title>
              <Card.Text>
                <li className="li-cold-temp">Minimum Temperature: {dayFiveMinTemp}</li>
                <li className="li-hot-temp">Maximum Temperature: {dayFiveMaxTemp}</li>
                <li className="li-day">During the Day: {dayFiveDayDescription}</li>
                <li className="li-night">At Night: {dayFiveNightDescription}</li>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
};

export default WeatherForecast;
