import React from "react";
import { Box, Text, Select } from "@chakra-ui/react";
import { TimerSettings } from "../Contexts/PomodoroContexts";

const Dropdown = ({ name }) => {

    const { setFocusTime, setShortBreak, setLongBreak }  = TimerSettings()
    console.log(setFocusTime);

    const dropdownValues = () => {
        let numbArray = []
        for(let i = 0; i <= 60; i += 5){
            numbArray.push(i)
        }
        return numbArray
    }
    let optionsArray = dropdownValues()

    const UpdateTimerSettings = (e) =>{
        if (name.toLowerCase() === "focus time"){
            setFocusTime(parseInt(e.target.value))
        } else if (name.toLowerCase() === "short break"){
            setShortBreak(parseInt(e.target.value))
        } else if (name.toLowerCase() === "long break"){
            setLongBreak(parseInt(e.target.value))
        }
    } 

    return(
        <Box display={'flex'} color={'white'} justifyContent={'space-between'} w={'250px'} p={'10px'} bgColor={'#2D2C3F'} borderRadius={'20px'}>
                <Text>{name}: </Text>
                <Select variant={'unstyled'} color={'brand.700'} w={'100px'} onChange={(e) => UpdateTimerSettings(e)}>
                {
                    optionsArray.map((option) => {
                        return (
                        <option key={option} value={option} >{option} mins</option>
                    )
                    }
                    )
                }
                </Select>
            </Box>
    )
}


export default Dropdown;