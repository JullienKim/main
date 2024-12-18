import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  // console.log(cities);
  return (
    <ButtonGroup>
      <Button variant="warning" onClick={() => setCity("")}>
        Current Location
      </Button>
      {cities.map((it, index) => (
        <Button
          onClick={() => {
            handleCityChange(it);
          }}
          variant="warning"
          key={index}
        >
          {it}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
