import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function MainInfo(weatherData){
    const [icon, setIcon] = useState("none")
    const [cityName, setCityName] = useState("none")
    const [region, setRegion] = useState("none")
    const [localtime, setLocaltime] = useState("none")
    const [lastUpdated, setLastUpdated] = useState("none")
    const [description, setDescription] = useState("none")
    const [feelsLike, setFeelsLike] = useState("none")
    const [temperature, setTemperature] = useState("none")
    const [windSpeed, setWindSpeed] = useState("none")
    const [precip, setPrecip] = useState("none")
    const [Pressure, setPressure] = useState("none")
    const [windDirection, setWindDirection] = useState("none")
    const [humidity, setHumidity] = useState("none")

    useEffect(()=>{
        if(weatherData.weatherData){
            setIcon(weatherData.weatherData.current.condition.icon)
            setCityName(weatherData.weatherData.location.name)
            setRegion(weatherData.weatherData.location.region)
            setLocaltime(weatherData.weatherData.location.localtime)
            setLastUpdated(weatherData.weatherData.current.last_updated)
            setDescription(weatherData.weatherData.current.condition.text)
            setFeelsLike(weatherData.weatherData.current.feelslike_c)
            setTemperature(weatherData.weatherData.current.temp_c)
            setWindDirection(weatherData.weatherData.current.wind_dir)
            setWindSpeed(weatherData.weatherData.current.wind_mph)
            setPrecip(weatherData.weatherData.current.precip_mm)
            setPressure(weatherData.weatherData.current.pressure_mb)
            setHumidity(weatherData.weatherData.current.humidity)
        }
    }, [weatherData.weatherData])

    const styleForDescriptionTextInMainInfo = {
        p:"5px"
    }

    return(
        <Box>
            <Box
                sx={{
                    display:"flex",
                    position:"relative"
                }}
            >
                <img src={icon} alt="" width="80px" style={{marginLeft:"10px", marginTop:"10px" }} />
                <Typography
                    variant="h2"
                    sx={{mt:"5px"}}
                >{cityName}</Typography>
                <Typography
                    sx={{
                        position:"absolute",
                        top:"70px",
                        left:"1.6%"
                    }}
                >
                    <b>Region:</b> {region} <b>Local time:</b> {localtime.slice(-5)} <b>Last updated:</b> {lastUpdated}
                </Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor:"white",
                    width:"fit-content",
                    mt:"5px",
                    ml:"20px",
                    borderRadius:"10px",
                }}
            >
                <Typography
                    variant="h3"
                    sx={styleForDescriptionTextInMainInfo}
                >{description}</Typography>
                <Typography
                    sx={styleForDescriptionTextInMainInfo}
                >
                    Temperature: {temperature} <b>C</b> <br />
                    Feels like: {feelsLike} <b>C</b> <br />
                    Wind speed: {windSpeed} <b>mph</b> <br />
                    Precip: {precip} <b>mm</b> <br />
                    Pressure: {Pressure} <b>mb</b> <br />
                    Wind dirrection: {windDirection} <br />
                    Humidity: {humidity}
                </Typography>

            </Box>
        </Box>
    )
}

export default MainInfo;