import { Box, Input } from "@chakra-ui/react";
import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { PomodoroContext } from "../Contexts/PomodoroContexts";

const TaskName = () => {

    const { setTaskTitle } = useContext(PomodoroContext)

    return(
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'250px'} h={'100px'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'100%'} borderRadius={'30px'} bgColor={'#6c4eb3'}>
                    <Input p={'10px'} color={'white'} m={'auto'} variant={'unstyled'} placeholder={'Task: Write an article'} onChange={(e) => setTaskTitle(e.target.value)}/>
                    <Box w={'20%'} color={'white'}>
                        <FontAwesomeIcon icon={faPen} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskName;