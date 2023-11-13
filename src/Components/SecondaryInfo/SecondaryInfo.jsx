import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Item from "./Item";

function SecondaryInfo({weatherData}){

    const [itemsData, setItemsData] = useState([])
    useEffect(() => {
        if(weatherData){
            const itemsArray = []
            //transfer objects to one array
            for(const item in weatherData.forecast.forecastday){
                itemsArray.push(weatherData.forecast.forecastday[item])
            }
            setItemsData(itemsArray)
        }
    }, [weatherData])
    return(
        <Stack
            direction="row"
            sx={{
                ml:"70px",
                mt:"20px",
                width:"600px",
                flexWrap:"wrap"
            }}

        >
            {itemsData.map(item => <Item itemData={item}/>)}
        </Stack>
    )
}

export default SecondaryInfo