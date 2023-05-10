import React from 'react';
import styled from "styled-components";
import TopBar from "./TopBar.view";
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites.page';
import Footer from './Footer.view';
import City from './pages/City.page';
import Forecast from './pages/Forecast.page';
import WeatherCard from './pages/Card.page';

const App = () => {


  return (
    <Box>
      <TopBar />
      <City />
      <WeatherCard weatherType={'clear'} />
      <Forecast />
        <Routes>
          <Route path="/" exact component={City} />
          <Route path="/Favorites" exact component={Favorites} />
        </Routes>
      <Footer />
    </Box>
  );
};

export default App;

const Box = styled.div`
  min-height: 100vh;
  background-color: #28aeff;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

