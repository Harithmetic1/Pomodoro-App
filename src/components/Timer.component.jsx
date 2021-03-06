import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import { TimerSettings } from "../Contexts/PomodoroContexts";

const Timer = () => {
    const { focusTime, shortBreak } = TimerSettings()
    
    const [minute, setMinutes] = useState(focusTime)
    const [second, setSeconds] = useState(0)
    const [play, setPlay] = useState(true)

    let duration = focusTime * 60


    // const minuteTimer = minute < 10 ? `0${minute}` : minute;
    // const secondTimer = second < 10 ? `0${second}` : second;

    // let initialMinute = minute

   useEffect(() =>{
       let timer = setInterval(() => {
       clearInterval(timer)
        if (second === 0 && play){
            if (minute !== 0){
                setSeconds(59)
                setMinutes(minute - 1)
            }
        } else {
            if(play){
                setSeconds(second - 1)
            }
        }
       }, 1000)
   }, [second, minute, play, focusTime])
   
    return(
    <Box display={'flex'} 
    justifyContent={'center'}
    alignItems={'center'} 
    m={'auto'} 
    h={'350px'} 
    flexDir={'column'}
    gap={'30px'}
    color={'white'}>
        <CountdownCircleTimer
        isPlaying={play}
        duration={duration}
        key={focusTime}
        colors={['#664EFF', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
            // if (minute !== 0){
            //     return { shouldRepeat: true } 
            // } else if(minute === 0 && play){
            //     return { duration: shortBreak * 60 }
            // }   
            return ({
                delay: shortBreak * 60,
                shouldRepeat: true
                })
        }
        }
        >
            {({remainingTime}) => {
                let countMins = Math.floor(remainingTime / 60)
                let countSecond = remainingTime % 60
                countMins = countMins < 10 ? `0${countMins}` : countMins
                countSecond = countSecond < 10 ? `0${countSecond}` : countSecond
                if(countSecond === 0 && play){
                    if(countMins === 0){
                        duration = shortBreak * 60
                    }
                }
                return (`${countMins} : ${countSecond}`)}}
        </CountdownCircleTimer>
        <Box width={'50px'} h={'50px'} borderRadius={'50%'} variant={'with-shadow'} backgroundColor={'brand.800'} textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box >
                {!play ? <Box w={'100%'} h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={() => setPlay(!play)}><FontAwesomeIcon icon={faPlay} /></Box> : <Box w={'100%'} h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={() => setPlay(!play)}><FontAwesomeIcon icon={faPause} /></Box>}
            </Box>
        </Box>
    </Box>
    )
}

export default Timer;