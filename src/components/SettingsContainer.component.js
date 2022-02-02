import React, { useContext } from "react";

import { Box, Stack, Button } from "@chakra-ui/react";

import Dropdown from "./Dropdown.component";

import { PomodoroContext } from "../Contexts/PomodoroContexts";

const SettingsContainer = () =>{
    const { setTaskArray } = useContext(PomodoroContext)

    const settingNames = ["Focus time", "Short break", "Long break"]
    return(
        <>
            <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={'40px'} m={'auto'}>
                <Box display={'flex'} flexDir={'column'} gap={'10px'}>
                {
                    settingNames.map((setting) => (
                        <Dropdown name={setting} />
                    ))
                }
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <Button colorScheme={'purple'} variant={'outline'}>Cancel</Button>
                        <Button colorScheme={'purple'} variant={'solid'} onClick={() => setTaskArray()}>Save</Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default SettingsContainer;