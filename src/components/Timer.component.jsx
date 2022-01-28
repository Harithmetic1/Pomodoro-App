import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { FaPlay, FaPause } from "react-icons/fa"

const Timer = () => {
    
    const [minute, setMinutes] = useState(3)
    const [second, setSeconds] = useState(0)
    const [play, setPlay] = useState(true)

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
   }, [second, minute, play])
   
    return(
    <Box display={'flex'} 
    justifyContent={'center'}
    alignItems={'center'} 
    m={'auto'} 
    h={'500px'} 
    flexDir={'column'}
    gap={'50px'}
    color={'white'}>
        <CountdownCircleTimer
        isPlaying={play}
        duration={1 * 60}
        colors={['#664EFF', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
            if (minute !== 0){
                return { shouldRepeat: true } 
            } else if(minute === 0 && !play){
                return { shouldRepeat: true }
            }
        }}
        >
            {({remainingTime}) => {
                let countMins = Math.floor(remainingTime / 60)
                let countSecond = remainingTime % 60
                countMins = countMins < 10 ? `0${countMins}` : countMins
                countSecond = countSecond < 10 ? `0${countSecond}` : countSecond
                return (`${countMins} : ${countSecond}`)}}
        </CountdownCircleTimer>

        <Box width={'50px'} h={'50px'} borderRadius={'50%'} variant={'with-shadow'} backgroundColor={'brand.800'} textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box >
                {!play ? <Box w={'100%'} h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={() => setPlay(!play)}><FaPlay /></Box> : <Box w={'100%'} h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={() => setPlay(!play)}><FaPause /></Box>}
            </Box>
        </Box>
    </Box>
    )
}

export default Timer;