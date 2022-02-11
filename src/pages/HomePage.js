import React from "react";
import { Box } from "@chakra-ui/react";
import TaskName from "../components/TaskName.component";
import Timer from "../components/Timer.component";

import NavIcons from "../components/NavIcons.component";
import TaskList from "../components/TaskList.component";

import { PomodoroProvider } from "../Contexts/PomodoroContexts";

const HomePage = () => {

    return(
        <PomodoroProvider>
            <Box background={'brand.900'} h={'100%'} display={'flex'} flexWrap={'wrap'} position={'relative'}>
                <Box w={'100%'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} color={'white'} textAlign={'center'} p={'20px'}>
                        <h2>Pomodoro Timer</h2>
                        <Box>
                            <NavIcons />
                        </Box>
                    </Box>
                    <TaskName />
                    <Timer />
                    <TaskList />
                </Box>
            </Box>
        </PomodoroProvider>
    )
}

export default HomePage;