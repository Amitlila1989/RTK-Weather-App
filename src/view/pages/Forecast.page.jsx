import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../../state/forecast.slice';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css'
import WeatherCard from './Card.page';
import { getLocationKey } from '../../state/city.slice';

const Forecast = () => {
  const [tempDegree, setTempDegree] = useState("F");
  const cityName = useSelector((state) => state.city.name);
  const forecastData = useSelector((state) => state.forecast.data);
  const futureForecastData = useSelector((state) => state.forecast.futureData);
  const locationKey = useSelector((state) => state.city.locationKey);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
  //   dispatch(getLocationKey(cityName));
    
  //   dispatch(getDataAsync(locationKey));
  //   console.log('data', forecastData)
  }, [locationKey, dispatch]);

  const handleChangeDegree = () => {
    if (tempDegree === "C") {
      setTempDegree("F");
    } else {
      setTempDegree("C");
    }
  };

  // console.log('forecastData', forecastData);

  return (
    <>
  <Wrapper>
    <City />
    <WeatherCard/> 
  </Wrapper>
   </>
  );
};

export default Forecast;

     const Wrapper = styled.div`
      display: flex;
      align-items: center;
      border: 2px deeppink solid;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    const City = styled.div`
      font-size: 34px;
      margin-right: 10px;
    `;
    
    const Temperature = styled.div`
      font-size: 24px;
      margin-right: 10px;
    `;
    
    const Condition = styled.div`
      font-size: 18px;
      margin-right: 10px;
    `;
    
    const Icon = styled.img`
      width: 50px;
    `;







    // const Forecast = () => {
    //   const [city, setCity] = useState('Tel-Aviv'); // set default city here
    //   const [weatherData, setWeatherData] = useState({});
    //   const temperature = Math.round(weatherData.main.temp);
    //   const condition = weatherData.weather[0].description;
    //   const iconCode = weatherData.weather[0].icon;
    
    //   useEffect(() => {
    //     const fetchWeatherData = async (event) => {
    //       if(event.key === 'Enter') {
    //       try {
    //         const response = await axios.get(
    //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    //         );
    //         setWeatherData(response.data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    //     };
    
    //     fetchWeatherData();
    //   }, [city]);
    
    //     if (!weatherData) {
    //     return <div>Loading...</div>;
    //   }
    
    //   return (
    //     <Wrapper>
    //       <City>{city}</City>
    //       <Temperature>{temperature}°C</Temperature>
    //       <Condition>{condition}</Condition>
    //       <Icon src={`http://openweathermap.org/img/w/${iconCode}.png`} />
    //     </Wrapper>
    //   );
    // };