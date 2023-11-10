import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, Modal, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Item(itemData){
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const styleForDayModalInSecondaryInfo = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "fit-content",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display:"flex",
        flexWrap:"wrap",
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const hoursArray = []
    for(const hour in itemData.itemData.hour){
        hoursArray.push(itemData.itemData.hour[hour])
    }

    return(
        <Item
            sx={{
                m:"10px",
                width:"100px",
                cursor:"pointer"
            }}
            onClick={handleOpen}
        >
            <Typography>{itemData.itemData.date}</Typography>
            <img src={itemData.itemData.day.condition.icon} alt="" />
            <Typography
                sx={{wordWrap:"break-word"}}
            >{itemData.itemData.day.condition.text}</Typography>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box 
                    sx={styleForDayModalInSecondaryInfo}
                    // onBlur={handleClose}
                >
                    <Typography variant="h6">
                        Weather in {itemData.itemData.date}, {itemData.itemData.day.condition.text}, average temperature: {itemData.itemData.day.avgtemp_c}
                    </Typography>
                    <Typography>
                        Moon phase: {itemData.itemData.astro.moon_phase}, sunrise: {itemData.itemData.astro.sunrise}, sunset: {itemData.itemData.astro.sunrise}
                    </Typography>
                    <Box
                        sx={{
                            display:"flex",
                            flexWrap:"wrap",
                            mt:"20px"
                        }}
                    >
                        {hoursArray.map(hour => {
                            return(
                                <Accordion
                                    sx={{
                                        width:"180px"
                                    }}
                                >
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography>{hour.time.slice(-5)}</Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Typography variant="h6">
                                            {hour.condition.text}, {hour.temp_c}C
                                        </Typography>
                                        <Typography>
                                            Feels Like: {hour.feelslike_c}C,
                                            Humidity: {hour.humidity},
                                            Precip: {hour.precip_mm}mm,
                                        </Typography>
                                        <Typography>
                                            Wind direction: {hour.wind_dir},
                                            Wind speed: {hour.wind_kph}km
                                        </Typography>
                                    </AccordionDetails>

                                </Accordion>
                            )
                        })}
                    </Box>
                </Box>
            </Modal>
        </Item>
    )
}

export default Item