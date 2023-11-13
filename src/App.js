import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "./Components/Header/HeaderInput";
import MainInfo from "./Components/MainInfo/MainInfo";
import SecondaryInfo from "./Components/SecondaryInfo/SecondaryInfo";

function App() {
  const [searchLocation, setSearchLocation] = useState();
  const [currentLocation, setCurrentLocation] = useState("Moscow");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataPerDay, setWeatherDataPerDay] = useState()
  
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

      const response2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7e51a85e2d9b497f9f2102041230811&q=${searchLocation || currentLocation}&days=27&aqi=no&alerts=no&lang=ru`, {
        method:"GET",
        headers:{
          "Content-Type": "application/json"
        }
      })
      const json2 = await response2.json();
      setWeatherDataPerDay(json2)
    }
    getWeatherData();

  }, [currentLocation, searchLocation])

  return (
    <Box
      sx={{
        borderRadius:"10px",
        backgroundColor:"lightblue",
        height:"fit-content",
        position:"relative",
        textAlign:"center",
        display:'flex',
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Input 
        setSearchLocation = {(item) => setSearchLocation(item)}
      />
      <MainInfo 
        weatherData = {weatherData}
      />
      <SecondaryInfo 
        weatherData={weatherDataPerDay}
      />

    </Box>
  );
}

export default App;
