import { Box } from "@chakra-ui/react";
import React from "react";
import TaskName from "../components/TaskName.component";
import Timer from "../components/Timer.component";

import NavIcons from "../components/NavIcons.component";

const HomePage = () => {
    return(
        <Box background={'brand.900'} h={'100%'} display={'flex'} flexWrap={'wrap'} position={'relative'}>
            <Box w={'100%'}>
                <Box color={'white'} textAlign={'center'} p={'20px'}>
                    <h2>Pomodoro Timer</h2>
                </Box>
                <TaskName />
                <Timer />
            </Box>
            <NavIcons />
        </Box>
    )
}

export default HomePage;