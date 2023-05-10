import React from "react";
import styled from "styled-components";
import { Card, Icon, Image } from 'semantic-ui-react'

const WeatherCard = ({weatherData}) => (

  <Card>
    
    <Card.Content>
      <Card.Header>Date: </Card.Header>
      <p>Day:</p>
      {/* <p>{weatherData.WeatherText}</p> */}
      <p>Icon</p>
      <p>Night:</p>
      <p>Icon</p>
      
    </Card.Content>
    
  </Card>
)

export default WeatherCard;