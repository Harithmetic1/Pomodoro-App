import React, { useState, useEffect } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { TimerSettings } from "../Contexts/PomodoroContexts";

const Dropdown = ({ name }) => {

    const { focusTime, setFocusTime, shortBreak, setShortBreak, longBreak, setLongBreak }  = TimerSettings()
    const [ dropdownPlaceHolder, setDropdownPlaceHolder ] = useState(0)
    console.log(setFocusTime);

    useEffect(() => {
        if (name.toLowerCase() === "focus time"){
            setDropdownPlaceHolder(focusTime)
        } else if (name.toLowerCase() === "short break"){
            setDropdownPlaceHolder(shortBreak)
        } else if (name.toLowerCase() === "long break"){
            setDropdownPlaceHolder(longBreak)
        }
    }, [focusTime, longBreak, name, shortBreak])

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
        <Box display={'flex'} color={'white'} justifyContent={'space-between'} alignItems={'center'} w={'250px'} p={'10px'} bgColor={'#2D2C3F'} borderRadius={'20px'}>
                <Text>{name}: </Text>
                <Box w={'50px'} >
                    <Input variant={'flushed'} type={'number'} textAlign={'center'} onChange={ (e) => UpdateTimerSettings(e)} placeholder={dropdownPlaceHolder} />
                </Box>

            </Box>
    )
}


export default Dropdown;