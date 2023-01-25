import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import apiKey from '../.secrets/keys';
import CardGroup from 'react-bootstrap/CardGroup';
import WeatherForecast from './WeatherForecast';
// import FiveDayForecast from './FiveDayForecast';


const LocationKeyCall = () => {



    const [zip, setZip] = useState('');
    const [locationKey, setLocationKey] = useState('');
    const [disabled, setDisabled] = useState(true)
    
    // Hourly forecast
    // const [chanceOfRain, setChanceOfRain] = useState(Number);
    // const [isCurrentlyRaining, setIsCurrentlyRaining] = useState(Boolean);
    // const [rainType, setRainType] = useState('');
    // const [rainIntensity, setRainIntensity] = useState('');
    // const [temperature, setTemperature] = useState(Number);

    // Five day forecast
    // const [currentWeatherDescription, setCurrentWeatherDescription] = useState('');
    // const [minTemp, setMinTemp] = useState(Number);
    // const [maxTemp, setMaxTemp] = useState(Number);
    // const [dayDescription, setDayDescription] = useState('');
    // const [nightDescription, setNightDescription] = useState()

    // five day /forecasts/v1/daily/5day/12918_PC?apikey=v7AVnIGn6HrGAzf4MsM1N4K5xPcqJIzC 
// current weather description .Headline.Text 
// minTemp DailyForecasts[0-4].Temperature.Minimum.Value
// maxTemp DailyForecasts[0-4].Temperature.Maximum.Value
// description - day DailyForecasts[0-4].Day.IconPhrase
// description - night DailyForecasts[0-4].Night.IconPhrase



    const fetchWeatherLocation = async() => {

        const getWeatherData = await fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${zip}&details=true`);
        const weatherJSON = await getWeatherData.json();
        const weatherLocationKey = weatherJSON[0].Key;

        setLocationKey(weatherLocationKey)
        console.log(weatherLocationKey)
            
    }

    // const currentWeatherFetch = async() => {
    //     const getCurrentWeatherData = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey}?apikey=${apiKey}`);
    //     const currentWeatherJSON = await getCurrentWeatherData.json();
    //     const rainLikelihood = currentWeatherJSON[0].PrecipitationProbability;
    //     const isRaining = currentWeatherJSON[0].HasPrecipitation;
    //     const typeOfRain = currentWeatherJSON[0].PrecipitationType;
    //     const intensity = currentWeatherJSON[0].PrecipitationIntensity;
    //     const temp = currentWeatherJSON[0].Temperature.Value;

    //     setChanceOfRain(rainLikelihood);
    //     setIsCurrentlyRaining(isRaining);
    //     setRainType(typeOfRain);
    //     setRainIntensity(intensity);
    //     setTemperature(temp);

    //     console.log(`Chance of rain: ${chanceOfRain}, is raining: ${isCurrentlyRaining}, type of rain: ${rainType}, rain intensity ${rainIntensity}, temperature: ${temperature}.`)

    // }

    // const fetchFiveDayForecast = async() => {

    //     const getFiveDayForecastData = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`);
    //     const fiveDayForecastJSON = await getFiveDayForecastData.json();

    //     const weatherNow = fiveDayForecastJSON.Headline.Text; 
    //     const min = fiveDayForecastJSON.DailyForecasts[0].Temperature.Minimum.Value;
    //     const max = fiveDayForecastJSON.DailyForecasts[0].Temperature.Maximum.Value;
    //     const day = fiveDayForecastJSON.DailyForecasts[0].Day.IconPhrase;
    //     const night = fiveDayForecastJSON.DailyForecasts[0].Night.IconPhrase;

    //     setCurrentWeatherDescription(weatherNow);
    //     setMinTemp(min)
    //     setMaxTemp(max)
    //     setDayDescription(day)
    //     setNightDescription(night)
    //     console.log(`current weather: ${currentWeatherDescription}, min: ${minTemp}, max: ${maxTemp}, day description: ${dayDescription}, night description: ${nightDescription}.`)

    // }

    function searchKeyPress(e) {

        e = e || window.event;
        if (e.keyCode === 13) //13 is the key code for enter
        {
            document.getElementById('button-addon1').click();
            return false;
        }
        return true;
    }

    const handleClick = event => {
        console.log('button clicked');
        fetchWeatherLocation()
        setDisabled(false)
      };
  return (
    <>

            <InputGroup className="mx-auto" id='search-bar' type='text' value={zip} onChange={e => setZip(e.target.value)} onKeyUp={searchKeyPress}>
                <Button type='submit' variant="primary" id="button-addon1" onClick={handleClick}>
                Search
                </Button>
                <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <CardGroup hidden={disabled} className='mx-auto'>

            {/* <Card className='weather-card'>
                <Card.Img variant="top" id='card-img' src="../hourly-svg.svg" />
                <Card.Body>
                    
                    <Button className='forecast-button'  variant='primary' type='submit' onClick={currentWeatherFetch}><Card.Title>Weather This Hour</Card.Title></Button>
                    
                </Card.Body>
            </Card> */}


            {/* <Card className='weather-card'>
                <Card.Img variant="top" id='card-img' src="../weekly-svg.svg" />
                <Card.Body>
                    
                    <Button variant='primary' type='submit' onClick={fetchFiveDayForecast}><Card.Title>Five Day Forecast</Card.Title></Button>
                </Card.Body>
            </Card> */}
            <WeatherForecast locationKey={locationKey} />
            {/* <FiveDayForecast locationKey={locationKey} /> */}
            </CardGroup>












 

    </>
  )
}

export default LocationKeyCall