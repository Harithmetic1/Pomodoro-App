import React from "react";

import { Box } from "@chakra-ui/react";

import Dropdown from "./Dropdown.component";

// import { PomodoroContext } from "../Contexts/PomodoroContexts";

const SettingsContainer = () =>{
    // const { taskArray, setTaskArray, taskTitle, taskID } = useContext(PomodoroContext)

    const settingNames = ["Focus time", "Short break", "Long break"]

    // const newTask = [
    //     {
    //         id: taskID,
    //         name: taskTitle
    //     }
    // ]
    return(
        <>
            <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={'40px'} m={'auto'}>
                <Box display={'flex'} flexDir={'column'} gap={'10px'}>
                {
                    settingNames.map((setting, key) => (
                        <Dropdown name={setting} key={key} />
                    ))
                }
                </Box>
                {/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <Button colorScheme={'purple'} variant={'outline'}>Cancel</Button>
                        <Button colorScheme={'purple'} variant={'solid'}>Save</Button>
                    </Stack>
                </Box> */}
            </Box>
        </>
    )
}

export default SettingsContainer;