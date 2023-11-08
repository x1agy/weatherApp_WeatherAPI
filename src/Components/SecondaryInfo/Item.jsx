import React from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";

function Item(itemData){
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    console.log(itemData)
    return(
        <Item
            sx={{
                m:"10px",
                width:"100px"
            }}
        >
            <Typography>{itemData.itemData.date}</Typography>
            <img src={itemData.itemData.day.condition.icon} alt="" />
            <Typography
                sx={{wordWrap:"break-word"}}
            >{itemData.itemData.day.condition.text}</Typography>
        </Item>
    )
}

export default Item