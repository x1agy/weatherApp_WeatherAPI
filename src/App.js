import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "./Components/Header/HeaderInput";
import MainInfo from "./Components/MainInfo/MainInfo";

function App() {
  const [searchLocation, setSearchLocation] = useState();
  const [currentLocation, setCurrentLocation] = useState("Moscow");
  const [weatherData, setWeatherData] = useState(null);
  
  useEffect(() => {
    async function getWeatherData(){
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        setCurrentLocation(`${latitude},${longitude}`)
      })
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7e51a85e2d9b497f9f2102041230811&q=${searchLocation || currentLocation}&aqi=no&lang=ru`, {
          method:"GET",
          headers:{
            "Content-Type": "application/json"
          }
        })
      const json = await response.json() 
      setWeatherData(json);
    }
    getWeatherData();

  }, [currentLocation, searchLocation])

  console.log(weatherData)
  return (
    <Box
      sx={{
        borderRadius:"10px",
        backgroundColor:"lightblue",
        height:"100vh",
        position:"relative",
      }}
    >
      <Input 
        setSearchLocation = {(item) => setSearchLocation(item)}
      />
      <MainInfo 
        weatherData = {weatherData}
      />

    </Box>
  );
}

export default App;
