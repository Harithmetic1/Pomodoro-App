import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import TaskName from "../components/TaskName.component";
import Timer from "../components/Timer.component";

// import NavIcons from "../components/NavIcons.component";
import TaskList from "../components/TaskList.component";

import { PomodoroContext } from "../Contexts/PomodoroContexts";

const HomePage = () => {

   const [taskTitle, setTaskTitle] = useState("")
   const [taskArray, setTaskArray] = useState([])
   const [taskID, setTaskID] = useState(0)

    return(
        <PomodoroContext.Provider value={{taskTitle, setTaskTitle, taskArray, setTaskArray, taskID, setTaskID}}>
            <Box background={'brand.900'} h={'100%'} display={'flex'} flexWrap={'wrap'} position={'relative'}>
                <Box w={'100%'}>
                    <Box color={'white'} textAlign={'center'} p={'20px'}>
                        <h2>Pomodoro Timer</h2>
                    </Box>
                    <TaskName />
                    <Timer />
                    <TaskList />
                </Box>
                {/* <NavIcons /> */}
            </Box>
        </PomodoroContext.Provider>
    )
}

export default HomePage;