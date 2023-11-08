import { Box, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

function Input({setSearchLocation}){

    const [inputValue, setInputValue] = useState()
    const [openSnackbarBool, setOpenSnackBarBool] = useState(false);

    function findLocation(value){
        fetch(`http://api.weatherapi.com/v1/search.json?key=7e51a85e2d9b497f9f2102041230811&q=${value}`,{
            method:"GET"
        })
            .then(response => response.json())
            .then(data =>{
                if(data.length){
                    setSearchLocation(inputValue);
                    setInputValue("")
                }
                else{
                    setOpenSnackBarBool(true)
                }
            })
    }

    return(
        <Box
            sx={{
                position:"relative"
            }}
        >
            <TextField
                sx={{
                    width:"80%",
                    mt:"20px",
                    bgcolor:"white",
                    ml:"18px"
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
                variant="contained"
                sx={{
                    mt:"20px",
                    height:"55px",
                    position:"absolute",
                }}
                onClick={() => findLocation(inputValue)}
            >
                <SearchIcon 
                    sx={{
                        zIndex:"2",
                        width:"100px",
                    }}
                />
            </Button>
            <Snackbar 
                open={openSnackbarBool}
                autoHideDuration={3000}
                onClose={() => setOpenSnackBarBool(false)}
                message="Проверьте правильность введенных данных"
            />
        </Box>
    )
}

export default Input